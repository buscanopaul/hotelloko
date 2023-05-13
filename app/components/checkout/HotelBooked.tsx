import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {};

const HotelBooked = (props: Props) => {
  return (
    <View className="relative border-gray-200 rounded-xl border-2 flex-row my-5">
      <Image
        source={{
          uri: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
        }}
        className="w-28 h-28 rounded-xl my-1 mx-2"
        resizeMode="cover"
      />
      <View className="flex-col justify-around w-32 font-sans pl-3 py-1">
        <Text className="font-bold text-md font-sans">
          Plazzo Versace Luxury Hotels
        </Text>
        <Text className="text-[#FD912D] font-bold font-sans">$450</Text>
        <Text className="text-xs font-serif">/per night</Text>
        <Pressable className="flex-row items-center">
          <Text className="text-xs font-serif">View details</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default HotelBooked;
