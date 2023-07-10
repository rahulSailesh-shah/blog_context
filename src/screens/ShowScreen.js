import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(BlogContext);
  const blog = state.find((post) => post.id === route.params.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.content}>{blog.content}</Text>
      <Button
        title="Edit"
        onPress={() => {
          navigation.navigate("Edit", { id: blog.id });
        }}
      />
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontFamily: "Avenir",
    fontWeight: "500",
    marginBottom: 15,
  },
  content: {
    fontSize: 18,
    fontFamily: "Avenir",
    marginBottom: 10,
  },
});
