import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import CategoryCard from './CategoryCard';

type Props = {};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hotel',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Flight',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Place',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Food',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Food',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Food',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724',
    title: 'Food',
  },
];

type ItemData = {
  id: string;
  title: string;
};

const HomeCategories = (props: Props) => {
  const handleCategory = useCallback(() => {}, []);

  const renderItem = ({ item, index }: { item: ItemData; index: number }) => {
    return (
      <CategoryCard onPress={handleCategory} index={index} title={item.title} />
    );
  };
  return (
    <FlatList
      className="px-4 mt-5"
      style={{ flexGrow: 0 }}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      ItemSeparatorComponent={() => <View className="w-4" />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HomeCategories;
