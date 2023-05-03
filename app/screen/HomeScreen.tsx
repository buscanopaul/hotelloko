import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import HomeCategories from '../components/home/HomeCategories';
import HomeHeader from '../components/home/HomeHeader';
import HomeHotDeals from '../components/home/HomeHotDeals';
import HomePopularHotels from '../components/home/HomePopularHotels';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeCategories />
        <HomePopularHotels />
        <HomeHotDeals />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
