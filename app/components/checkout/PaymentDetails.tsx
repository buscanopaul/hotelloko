import React from 'react';
import { Text, View } from 'react-native';
import SubTitle from '../SubTitle';
import PaymentDetailsItem from './PaymentDetailsItem';

type Props = {};

const PaymentDetails = (props: Props) => {
  return (
    <View className="relative mt-5">
      <SubTitle>Payment Details</SubTitle>
      <View className="border-b border-b-gray-200 my-3" />
      <PaymentDetailsItem title="Standard Room" value={450} />
      <PaymentDetailsItem title="Security Deposit" value={100} />
      <PaymentDetailsItem title="Inc. Tax" value={35} />
      <View className="border-b border-b-gray-200 my-3" />
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-base font-sans">Total</Text>
        <Text className="text-base font-serif">$585</Text>
      </View>
    </View>
  );
};

export default PaymentDetails;
