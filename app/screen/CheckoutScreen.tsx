import { useIsFocused } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Button from '../components/Button';
import HotelBooked from '../components/checkout/HotelBooked';
import HotelForm from '../components/checkout/HotelForm';
import Pax from '../components/checkout/Pax';
import PaymentDetails from '../components/checkout/PaymentDetails';

type Props = {};

const CheckoutScreen = ({ navigation }: Props) => {
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true, title: 'Booking' });
  }, [isFocused]);

  return (
    <SafeAreaView>
      <View className="bg-white px-6 h-full">
        <Pax />
        <HotelBooked />
        <HotelForm />
        <PaymentDetails />
      </View>
      <View className="mx-7">
        <Button onPress={() => {}}>Continue to payment</Button>
      </View>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default CheckoutScreen;
