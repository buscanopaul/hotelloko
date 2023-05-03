import React from 'react';
import { Text } from 'react-native';

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return <Text className="font-sans text-2xl w-40">{children}</Text>;
};

export default Title;
