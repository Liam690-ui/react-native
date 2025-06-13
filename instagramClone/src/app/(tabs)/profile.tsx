import Button from "@/components/ui/Button";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      {/* avatar image picker */}
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.imagePlaceholder}
        />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <Text style={styles.description} onPress={pickImage}>
        change
      </Text>
      {/* form  */}
      <View style={styles.formItem}>
        <Text style={styles.formItemLabel}>Username:</Text>
        <TextInput
          placeholder="username"
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      {/* button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Update Profile"
          onPress={() => {}}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title="Sign Out"
          onPress={() => {}}
          style={styles.button}
          textStyle={styles.buttonText}
        />
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
  imagePlaceholder: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 150 / 2,
    backgroundColor: "lightgray",
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 12,
    color: "blue",
  },
  formItem: {
    width: "100%",
    marginTop: 16,
  },
  formItemLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 4,
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
    padding: 12,
    marginTop: 12,
    backgroundColor: "blue",
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
