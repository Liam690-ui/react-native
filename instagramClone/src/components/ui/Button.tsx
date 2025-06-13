import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button({
  title,
  onPress,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
