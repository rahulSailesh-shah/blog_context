import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import BlogForm from "./BlogForm";

const EditScreen = ({ navigation, route }) => {
  const { state, editPost } = useContext(Context);

  const { id, title, content } = state.find((b) => b.id === route.params.id);

  return (
    <BlogForm
      initialValues={{ title, content }}
      onFormSubmit={(title, content) => {
        editPost(id, title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
