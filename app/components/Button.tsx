import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  children: string;
  onPress: () => void;
};

const Button = ({ children, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-blue-500 absolute bottom-10 w-full px-5 py-4 rounded-2xl active:bg-blue-600"
      style={styles.button}
    >
      <Text className="text-center text-white font-sans text-lg">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;

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
