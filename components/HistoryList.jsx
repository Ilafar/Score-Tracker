import React, { useCallback, useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import alligator_image from '../assets/images/player_images/alligator.png';
import bear_image from '../assets/images/player_images/bear.png';
import cat_image from '../assets/images/player_images/cat.png';
import fox_image from '../assets/images/player_images/fox.png';
import rabit_image from '../assets/images/player_images/rabit.png';
import cow_image from '../assets/images/player_images/cow.png';
import dog_image from '../assets/images/player_images/dog.png';
import alien_image from '../assets/images/player_images/alien.png';
import goril_image from '../assets/images/player_images/goril.png';
import versus_small from '../assets/images/component_imgs/versus_small.png';
import { useSQLiteContext } from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';

const HistoryList = () => {
  const db = useSQLiteContext();
  const [data, setData] = useState([]);

  const images = [
      alligator_image, 
      bear_image, 
      cat_image, 
      goril_image,
      dog_image, 
      cow_image, 
      fox_image, 
      rabit_image, 
      alien_image, 
  ];

  useFocusEffect(
    useCallback(() => {
      const result = db.getAllSync("SELECT * FROM games");

      const updatedData = result.map((game) => {
        const profile1Index = game.image1 - 1;
        const profile2Index = game.image2 - 1;

        const resolvedProfile1 = images[profile1Index] || dog_image;
        const resolvedProfile2 = images[profile2Index] || dog_image;

        return { ...game, resolvedProfile1, resolvedProfile2 };
      });

      setData(updatedData);
    }, [db])
  );

  const renderItem = ({ item }) => (
    <View className="flex-col border-b border-primary-200 mx-5">
      <Text className="text-text-dark text-3xl text-center font-bold w-full py-5">
        {item.GameName}
      </Text>
      <View className="flex-row items-center mx-6 justify-between"> 
        <Image className="h-[70px] w-[70px]" source={item.resolvedProfile1} />
        <Text className="text-text-dark text-3xl font-bold">{item.score1}</Text>
        <Image className="h-[70px] w-[30px]" source={versus_small} />
        <Text className="text-text-dark text-3xl font-bold">{item.score2}</Text>
        <Image className="h-[70px] w-[70px]" source={item.resolvedProfile2} />
      </View>
      <View className="flex-row justify-between mx-5 py-3">
        <Text className="text-text-dark text-xl font-bold w-[70px] text-center">
          {item.player1}
        </Text>
        <Text className="text-text-dark text-xl font-bold w-[70px] text-center">
          {item.player2}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      className="w-full"
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default HistoryList;
