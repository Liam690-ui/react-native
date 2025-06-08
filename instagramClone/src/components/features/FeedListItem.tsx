import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FeedListItem({ post }: { post: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.user.image_url }} style={styles.avatar} />
        <Text style={styles.username}>{post.user.username}</Text>
      </View>

      <Image source={{ uri: post.image }} style={styles.image} />

      <View style={styles.footer}>
        <AntDesign name="hearto" size={20} color="black" style={styles.icon} />
        <Ionicons
          name="chatbubble-outline"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Feather name="send" size={20} color="black" style={styles.icon} />
        <Feather
          name="bookmark"
          size={20}
          color="black"
          style={styles.bookmark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 50,
  },
  username: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 12,
  },
  bookmark: {
    marginLeft: "auto",
  },
});
