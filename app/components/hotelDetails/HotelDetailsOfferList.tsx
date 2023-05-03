import React from 'react';
import { FlatList, View } from 'react-native';
import HotelDetailsOfferListItem from './HotelDetailsOfferListItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '2 Beds',
    category: 'hotel',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dinner',
    category: 'glass',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Hot Tub',
    category: 'bathtub',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: '1 AC',
    category: 'podcast',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Food',
    category: 'battery',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724',
    title: 'Food',
    category: 'battery',
  },
];

type Props = {};

const HotelDetailsOfferList = (props: Props) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <HotelDetailsOfferListItem item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0, paddingLeft: 25 }}
      ItemSeparatorComponent={() => <View className="w-3" />}
    />
  );
};

export default HotelDetailsOfferList;
