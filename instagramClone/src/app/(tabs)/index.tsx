import { FlatList } from "react-native";
import FeedListItem from "../../components/features/FeedListItem";
import feedPosts from "../../utils/data/data.json";

export default function FeedScreen() {
  return (
    <FlatList
      data={feedPosts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FeedListItem post={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
