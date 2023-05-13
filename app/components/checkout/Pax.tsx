import { AntDesign, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {};

const Pax = (props: Props) => {
  return (
    <View className="bg-white flex-row items-center justify-around mt-5 relative shadow-lg rounded-lg">
      <View className="flex-row items-center gap-2 p-3">
        <AntDesign name="calendar" size={12} color="black" />
        <Text className="text-xs font-serif">22nd March - 20 Apr</Text>
      </View>
      <View className="h-full w-[1px] bg-gray-300" />
      <View className="flex-row items-center gap-2 p-3">
        <Fontisto name="persons" size={12} color="black" />
        <Text className="text-xs font-serif">2 Guests, 1 Room</Text>
      </View>
    </View>
  );
};

export default Pax;
