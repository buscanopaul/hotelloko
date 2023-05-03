import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
  children: string;
  onPress: () => void;
};

const LinkText = ({ children, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text className="text-orange-400">{children}</Text>
    </Pressable>
  );
};

export default LinkText;
