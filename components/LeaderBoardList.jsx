import React, { useState, useCallback } from 'react';
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
import { useSQLiteContext } from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';

const LeaderBoardList = () => {
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
      const result = db.getAllSync("SELECT * FROM players ORDER BY score DESC");

      const updatedData = result.map((player) => {
        const imageIndex = player.image - 1; 
        const resolvedImage = images[imageIndex]
        return { ...player, resolvedImage };
      });

      setData(updatedData);
    }, [db])
  );

  const renderItem = ({ item }) => (
    <View className="flex-row items-center px-10 py-6 m-4 justify-between border-b border-primary-200"> 
      <Text className="text-text-dark text-lg font-bold">
        {data.findIndex((element) => element.name === item.name) + 1}
      </Text>
      <View className="flex-row gap-4 items-center">
        <Image source={item.resolvedImage} className="w-[50px] h-[50px]" />
        <Text className="text-text-dark text-xl font-bold">{item.name}</Text>  
      </View>
      <Text className="text-text-dark text-[30px] font-bold">{item.score}</Text>
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

export default LeaderBoardList;
