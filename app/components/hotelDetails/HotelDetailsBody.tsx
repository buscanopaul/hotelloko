import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SubTitle from '../SubTitle';
import Title from '../Title';
import HotelDetailsOfferList from './HotelDetailsOfferList';

type Props = {};

const HotelDetailsBody = (props: Props) => {
  return (
    <View className="bg-white -top-4 rounded-t-3xl h-full flex-1">
      <View className="p-7">
        <Title>BaLi Motel Vung Tau</Title>
        <View className="flex-row gap-2 mt-0 items-center">
          <Feather name="map-pin" size={15} color="black" />
          <Text className="font-serif text-xs">Indonesia</Text>
        </View>
        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row items-center gap-1">
            <FontAwesome name="star" size={15} color="orange" />
            <Text className="text-black font-serif text-xs">3.0</Text>
            <Text className="text-gray-500 text-xs font-serif">
              (6.8k review)
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-sans text-xl">$580/</Text>
            <Text className="font-serif">night</Text>
          </View>
        </View>
        <View className="border-b-[1px] border-b-gray-400 my-5" />
        <Text className="text-sm text-gray-800 font-serif mb-7">
          Set in Vung Tau, 100 meters from Front Beach, BaLi Motel Vung Tau
          offers accommodation with a garden, private parking and a shared....
        </Text>
        <SubTitle>What we offer</SubTitle>
      </View>
      <HotelDetailsOfferList />
      <View className="px-7 mt-7">
        <SubTitle>Hoted By</SubTitle>
        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
              resizeMode="cover"
              className="w-10 h-10 rounded-xl"
            />
            <View className="pl-3">
              <Text>Harleen Smith</Text>
              <View className="flex-row gap-1">
                <FontAwesome name="star" size={15} color="orange" />
                <Text className="font-serif text-xs">4.9</Text>
                <Text className="font-serif text-gray-500 text-xs">
                  (1.4K review)
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            onPress={() => {}}
            className="bg-[#FD912D] w-10 h-10 rounded-xl shadow-2xl items-center justify-center"
          >
            <FontAwesome name="wechat" size={18} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HotelDetailsBody;
