import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";
import BlogForm from "./BlogForm";

const AddScreen = ({ navigation }) => {
  const { addPost } = useContext(Context);

  return (
    <BlogForm
      onFormSubmit={(title, content) => {
        addPost({ title, content }, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

export default AddScreen;

const styles = StyleSheet.create({});
