import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function NewFeedScreen() {
  const [caption, setCaption] = useState("shanaya shalom");
  const handleCaptionChange = (newCaption: string) => {
    setCaption(newCaption);
  };
  return (
    <View style={styles.container}>
      {/* image picker */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
        }}
        style={{ width: 208, aspectRatio: 3 / 4, borderRadius: 12 }}
      />
      {/* text input */}
      <Text style={styles.description} onPress={() => {}}>
        change
      </Text>
      <TextInput
        placeholder="what's on your mind?"
        style={styles.textInput}
        value={caption}
        onChangeText={handleCaptionChange}
      />
      {/* button */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 12,
    color: "blue",
  },
  textInput: {
    width: "100%",
    fontSize: 14,
    fontWeight: "500",
    padding: 12,
    marginTop: 12,
    color: "black",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "auto",
  },
  button: {
    width: "100%",
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
