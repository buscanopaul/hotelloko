import React from 'react';
import { ImageBackground, View } from 'react-native';
import PressableIcon from '../PressableIcon';

type Props = {
  onPress: () => void;
};

const HotelDetailsHeader = ({ navigation, onPress }: Props) => {
  return (
    <ImageBackground
      className="w-full h-52 justify-center"
      source={{
        uri: 'https://curlytales.com/wp-content/uploads/2020/09/oorr-watervilla-bedroom-2-1170x731.jpg',
      }}
      resizeMode="cover"
    >
      <View className="px-4 flex-row items-center justify-between">
        <PressableIcon icon="arrow-left" onPress={onPress} />
        <View className="flex-row">
          <PressableIcon icon="share-2" onPress={() => {}} />
          <View className="ml-4">
            <PressableIcon icon="heart" onPress={() => {}} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HotelDetailsHeader;
