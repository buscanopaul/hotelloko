import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  title: string;
  value: number;
};

const PaymentDetailsItem = ({ title, value }: Props) => {
  return (
    <View className="relative flex-row items-center justify-between">
      <Text className="text-base text-gray-500 font-serif">{title}</Text>
      <Text className="text-base font-serif">${value}</Text>
    </View>
  );
};

export default PaymentDetailsItem;
