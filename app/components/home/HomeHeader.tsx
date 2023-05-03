import React from 'react';
import { View } from 'react-native';
import PressableIcon from '../PressableIcon';
import Title from '../Title';

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View className="flex flex-row justify-between items-start px-4">
      <Title>Where you wanna go?</Title>
      <PressableIcon icon="search" onPress={() => {}} />
    </View>
  );
};

export default HomeHeader;
