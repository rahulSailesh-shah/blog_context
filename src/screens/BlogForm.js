import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogForm = ({ initialValues, onFormSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
      <Text style={styles.title}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        multiline
        numberOfLines={20}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          onFormSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogForm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Avenir",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "Avenir",
  },
});
