import React from 'react';
import { FlatList, Text, View, Image} from 'react-native';
import player_1 from '../assets/images/component_imgs/player_1.png'
import player_2 from '../assets/images/component_imgs/player_2.png'

const LeaderBoardList = () => {
  const data = [
    { id: '1', title: 'Adil', score:4, profile: player_1 },
    { id: '2', title: 'Ilafer', score:3, profile: player_2 },
    { id: '3', title: 'Adil', score:4, profile: player_1 },
    { id: '4', title: 'Adil', score:4, profile: player_1 },
    { id: '5', title: 'Adil', score:4, profile: player_1 },
    { id: '6', title: 'Adil', score:4, profile: player_1 },
    { id: '7', title: 'Adil', score:4, profile: player_1 },

  ];

  const renderItem = ({ item }) => (
    <View className="flex-row items-center px-10 py-6 m-4 justify-between border-b border-primary-200"> 
        <Text className = "text-text-dark text-lg font-bold">{item.id}</Text>
        <View className = "flex-row gap-4 items-center">
          <Image source={item.profile} className = "w-[50px] h-[50px]"/>
          <Text className = "text-text-dark text-xl font-bold">{item.title}</Text>  
        </View>
        <Text className = "text-text-dark text-[30px] font-bold">{item.score}</Text>
    </View>
  );

  return (
    <FlatList
      className = "w-full"
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default LeaderBoardList;