import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PlayerPickerView = ({players,selectedPlayer, setSelectedPlayer}) => {

  return (
    <View>
      <View className="w-[150px] h-[50px]">
        <Picker
          selectedValue={selectedPlayer}
          onValueChange={(itemValue) => setSelectedPlayer(itemValue)}
        >
          {players.length > 0 ? (
            players.map((player, index) => (
              <Picker.Item
                key={index}
                label={player.name}
                value={player.name}
              />
            ))
          ) : (
            <Picker.Item label="No Players" value="" />
          )}
        </Picker>
      </View>
    </View>
  );
};

export default PlayerPickerView;
