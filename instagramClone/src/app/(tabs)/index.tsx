import feedPosts from "@/app/utils/data/data.json";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const post = feedPosts[0];
export default function FeedScreen() {
  console.log(post);
  return (
    <View style={styles.container}>
      <Text>Feeds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
