import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import DatePicker from 'react-native-neat-date-picker';
import Button from '../components/Button';
import HotelDetailsBody from '../components/hotelDetails/HotelDetailsBody';
import HotelDetailsHeader from '../components/hotelDetails/HotelDetailsHeader';
import { useSalesStore } from '../store';

type Props = {};

const HotelDetailsScreen = ({ navigation }: Props) => {
  const [showDatePickerRange, setShowDatePickerRange] = useState(false);
  const sales = useSalesStore((state: any) => state.sales);
  const addSale = useSalesStore((state: any) => state.addSale);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleOpenDate = useCallback(() => {
    setShowDatePickerRange(true);
  }, []);

  const onCancelRange = useCallback(() => {
    setShowDatePickerRange(false);
  }, []);

  const onConfirmRange = useCallback((date: any) => {
    if (date.startDateString !== date.endDateString) {
      setShowDatePickerRange(false);
      const days =
        date.endDateString.split('-').pop() -
        date.startDateString.split('-').pop();
      let totalPrice =
        (date.endDateString.split('-').pop() -
          date.startDateString.split('-').pop()) *
        580;
      const sale = {
        id: '1',
        startDate: date.startDateString,
        endDate: date.endDateString,
        hotel: 'Bali Motel Vung Tau',
        country: 'Indonesia',
        price: 580,
        days: days,
        totalPrice: totalPrice,
      };
      addSale(sale);
      navigation.navigate('Checkout');
    } else {
      Alert.alert('Error Date', 'Please select end date', [
        { text: 'Try Again', onPress: () => console.log('try again pressed') },
      ]);
    }
  }, []);

  useEffect(() => {
    console.log('test', sales);
  }, [sales]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <StatusBar style="light" />
        <HotelDetailsHeader onPress={handleBack} />
        <HotelDetailsBody />
      </ScrollView>
      <DatePicker
        isVisible={showDatePickerRange}
        mode={'range'}
        onCancel={onCancelRange}
        onConfirm={onConfirmRange}
        // minDate={new Date('2023-05-08')}
      />
      <View className="mx-7">
        <Button onPress={handleOpenDate}>Book now</Button>
      </View>
    </View>
  );
};

export default HotelDetailsScreen;
