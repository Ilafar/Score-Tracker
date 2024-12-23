import { View, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import Fab from '../../components/Fab'
import delete_icon from '../../assets/images/component_imgs/delete_players.png';
import alligator_image from '../../assets/images/player_images/alligator.png';
import bear_image from '../../assets/images/player_images/bear.png';
import cat_image from '../../assets/images/player_images/cat.png';
import fox_image from '../../assets/images/player_images/fox.png';
import rabit_image from '../../assets/images/player_images/rabit.png';
import cow_image from '../../assets/images/player_images/cow.png';
import dog_image from '../../assets/images/player_images/dog.png';
import alien_image from '../../assets/images/player_images/alien.png';
import goril_image from '../../assets/images/player_images/goril.png';

import CustomButton from '../../components/CustomButton';

const AddPlayer = () => {
  const db = useSQLiteContext();
  const [playerName, setPlayerName] = useState('');
  const [selectedImageId, setSelectedImageId] = useState(null);

  const images = [
    { id: 1, source: alligator_image, name: 'alligator' },
    { id: 2, source: bear_image, name: 'bear' },
    { id: 3, source: cat_image, name: 'cat' },
    { id: 4, source: goril_image, name: 'goril' },
    { id: 5, source: dog_image, name: 'dog' },
    { id: 6, source: cow_image, name: 'cow' },
    { id: 7, source: fox_image, name: 'fox' },
    { id: 8, source: rabit_image, name: 'rabit' },
    { id: 9, source: alien_image, name: 'alien' },
  ];


  

  return (
    <SafeAreaView className="bg-background-dark h-full items-center justify-center">
      <View className="flex-1 items-center justify-center ">
        <TextInput
          className="rounded-lg border border-primary-100 w-[260px] h-[70px] text-center text-text-dark text-2xl"
          placeholder="Player name"
          onChangeText={setPlayerName}
          placeholderTextColor="rgb(34, 139, 34)"
        />

        <View className="flex-row flex-wrap justify-center gap-4 mx-10 mt-10">
          {images.map((image,index) => (
            <TouchableOpacity
              key={image.id}
              onPress={() => setSelectedImageId(image.id)}
              className="mr-2 mb-2"
            >
              <Image
                source={image.source}
                className={`w-[80px] h-[80px] rounded-lg ${
                  selectedImageId === image.id ? 'border-4 border-green-500' : ''
                }`}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-col h-1/3 ">
        <CustomButton
          title="Add Player"
          onPress={() => {
            if (playerName && selectedImageId) {
              db.runSync(
                "INSERT INTO players (name, score, image) VALUES(?, ?, ?);",
                [playerName, 0, selectedImageId]
              );
            }
          }}
          textStyles="text-text-dark font-bold text-2xl"
          containerStyles="bg-primary-100 px-8 mt-10"
        />
        
          <Fab
            title="Delete Players"
            fabIcon={delete_icon}
            buttonStyle={"bg-red-800"}
            onPress={() => {
              db.runSync("DELETE FROM players")
            }}
          />
          <Fab
            title="Delete History"
            fabIcon={delete_icon}
            buttonStyle={"bg-red-800"}
            onPress={() => {
              db.runSync("DELETE FROM games")
            }}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default AddPlayer;
