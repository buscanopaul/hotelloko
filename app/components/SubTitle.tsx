import React from 'react';
import { Text } from 'react-native';

type Props = {
  children: string;
};

const SubTitle = ({ children }: Props) => {
  return <Text className="text-xl font-sans">{children}</Text>;
};

export default SubTitle;
