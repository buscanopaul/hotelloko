import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../components/Button';
import { MainStackParamList } from '../types/MainStackParamsList';

type OnboardingScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'OnBoarding'
>;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

const OnBoardingScreen = ({ navigation }: Props) => {
  const handleGetStarted = useCallback(() => {
    navigation.navigate('Tabs');
  }, []);

  return (
    <View className="flex-1 bg-white">
      <View className="mx-4 flex-1">
        <Image
          source={require('../../assets/bg_onboard1.png')}
          className="w-full h-1/2"
          resizeMode="contain"
        />
        <View className="mx-14 mt-10">
          <Text className="font-sans text-3xl text-center">
            Easy way to book your hotel with us!
          </Text>
          <Text className="font-serif text-lg text-center mt-2 text-gray-400">
            Also book flight ticket, places, food and many more.
          </Text>
        </View>
        <Button onPress={handleGetStarted}>Get Started</Button>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
