import Button from "@/components/ui/Button";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewFeedScreen() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleCaptionChange = (newCaption: string) => {
    setCaption(newCaption);
  };
  return (
    <View style={styles.container}>
      {/* image picker */}
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={{ width: 208, aspectRatio: 3 / 4, borderRadius: 12 }}
        />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      {/* text input */}
      <Text style={styles.description} onPress={pickImage}>
        change
      </Text>
      <TextInput
        placeholder="what's on your mind?"
        style={styles.textInput}
        value={caption}
        onChangeText={handleCaptionChange}
      />
      {/* button */}
      <Button
        title="Share"
        onPress={() => {}}
        style={styles.button}
        textStyle={styles.buttonText}
      />
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
    width: 208,
    aspectRatio: 3 / 4,
    borderRadius: 12,
    backgroundColor: "lightgray",
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
