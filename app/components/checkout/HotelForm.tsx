import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

type Props = {};

const HotelForm = (props: Props) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View className="relative">
      <TextInput
        className="bg-gray-100 p-3 rounded-md mb-3 font-serif"
        onChangeText={setFullName}
        value={fullName}
        placeholder="Full Name"
      />
      <TextInput
        className="bg-gray-100 p-3 rounded-md mb-3 font-serif"
        onChangeText={setPhone}
        value={phone}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <TextInput
        className="bg-gray-100 p-3 rounded-md font-serif"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email"
      />
    </View>
  );
};

export default HotelForm;
