import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  index: number;
  title: string;
  onPress: () => void;
};

const CategoryCard = ({ index, title, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${
        index === 0 ? 'bg-blue-500' : 'border border-gray-200'
      } items-center justify-center w-20 h-24 rounded-2xl`}
      style={index === 0 && styles.button}
    >
      <FontAwesome
        name="building-o"
        size={22}
        color={`${index === 0 ? 'white' : 'gray'}`}
      />
      <Text
        className={`${
          index === 0 ? 'text-white' : ' text-gray-500'
        } font-serif mt-3 text-xs`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  button: {
    shadowColor: '#4CA6FE',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
