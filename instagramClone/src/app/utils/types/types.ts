export type UserType = {
  id: string;
  avatar_url: string;
  image_url: string;
  username: string;
};

export type FeedType = {
  id: string;
  image: string;
  image_url: string;
  caption: string;
  user: UserType;
};
