import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import Button from '../components/Button';
import HotelDetailsBody from '../components/hotelDetails/HotelDetailsBody';
import HotelDetailsHeader from '../components/hotelDetails/HotelDetailsHeader';

type Props = {};

const HotelDetailsScreen = ({ navigation }: Props) => {
  const handleBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <StatusBar style="light" />
        <HotelDetailsHeader onPress={handleBack} />
        <HotelDetailsBody />
      </ScrollView>
      <View className="mx-7">
        <Button onPress={() => {}}>Book now</Button>
      </View>
    </View>
  );
};

export default HotelDetailsScreen;
