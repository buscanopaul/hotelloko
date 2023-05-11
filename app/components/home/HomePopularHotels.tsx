import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import LinkText from '../LinkText';
import SubTitle from '../SubTitle';
import PopularHotelCard from './PopularHotelCard';

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

const HomePopularHotels = (props: Props) => {
  const navigation = useNavigation();
  const handleHotelDetails = useCallback((item: any) => {
    navigation.navigate('HotelDetails');
  }, []);

  const renderItem = ({ item, index }: { item: ItemData; index: number }) => {
    return (
      <PopularHotelCard item={item} onPress={() => handleHotelDetails(item)} />
    );
  };

  return (
    <View className="mt-0">
      <View className="flex flex-row items-center justify-between px-4">
        <SubTitle>Popular Hotels</SubTitle>
        <LinkText onPress={() => {}}>See all</LinkText>
      </View>
      <FlatList
        className="px-4 mt-3"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => <View className="w-4" />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomePopularHotels;
