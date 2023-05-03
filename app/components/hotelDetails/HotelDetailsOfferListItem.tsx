import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  item: object;
};

const HotelDetailsOfferListItem = ({ item }: Props) => {
  return (
    <View className="border border-gray-300 h-20 p-5 justify-center items-center rounded-2xl">
      <FontAwesome name={item.category} size={20} color="black" />
      <Text className="font-serif text-xs mt-2">{item.title}</Text>
    </View>
  );
};

export default HotelDetailsOfferListItem;
