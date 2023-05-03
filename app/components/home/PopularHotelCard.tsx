import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

type Props = {
  item: object;
  onPress: () => void;
};

const PopularHotelCard = ({ item, onPress }: Props) => {
  return (
    <Pressable className="flex-1 relative" onPress={onPress}>
      <ImageBackground
        className="h-52 w-36 justify-end"
        source={{
          uri: 'https://a0.muscache.com/pictures/040e8864-1a4f-47a8-a0e6-31dca539b64f.jpg',
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          className="absolute w-full bottom-0 h-full rounded-2xl"
        />
        <View className="p-3">
          <Text className="text-white font-bold pb-2">Santorini</Text>
          <View className="flex flex-row items-center pb-2">
            <Feather name="map-pin" size={18} color="white" />
            <Text className="text-white pl-1 text-xs">Greece</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Text className="text-white font-bold text-xs">$488/</Text>
              <Text className="text-white">night</Text>
            </View>
            <View className="flex flex-row items-center">
              <FontAwesome name="star" size={15} color="orange" />
              <Text className="text-white pl-1 text-xs">4.9</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default PopularHotelCard;
