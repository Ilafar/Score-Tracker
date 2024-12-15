import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PlayerPickerView = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  return (
    <View className="w-[150px] h-[50px]">
      <Picker
        selectedValue={selectedPlayer}
        onValueChange={(itemValue) => setSelectedPlayer(itemValue)}
      >
        <Picker.Item label="Ilafer" value="Ilafer" />
        <Picker.Item label="Adil" value="Adil" />
      </Picker>
    </View>
  );
};

export default PlayerPickerView;