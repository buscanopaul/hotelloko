import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

type Props = {
  item: object;
};

const HotDealsCard = ({ item }: Props) => {
  return (
    <View className="flex-1 relative">
      <ImageBackground
        className="h-52 w-full"
        source={{
          uri: 'https://i.insider.com/523c8fd0eab8eabf6acb58b7?width=600&format=jpeg&auto=webp',
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          className="absolute w-full bottom-0 h-full rounded-2xl"
        />
        <View className="p-4 justify-between flex h-full">
          <View className="bg-[#FF8B63] w-20 py-1 rounded-full">
            <Text className="font-bold text-white self-center text-xs">
              25% off
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="font-bold text-white text-base">
                Bali Motel Vung Tau
              </Text>
              <View className="flex-row items-center">
                <Feather name="map-pin" size={18} color="white" />
                <Text className="text-white pl-1 text-xs">Indonesia</Text>
              </View>
            </View>
            <View className="items-end">
              <View className="flex-row items-center">
                <FontAwesome name="star" size={15} color="orange" />
                <Text className="text-white pl-1 text-xs">3.0</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-white font-bold">$580/</Text>
                <Text className="text-white">night</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HotDealsCard;
