import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  icon: string;
};

const PressableIcon = ({ onPress, icon }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white w-8 h-8 items-center justify-center rounded-full"
      style={styles.button}
    >
      <Feather name={icon} size={18} color="black" />
    </Pressable>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9.51,
    elevation: 5,
  },
});
