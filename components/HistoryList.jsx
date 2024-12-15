import React from 'react';
import { FlatList, Text, View, Image} from 'react-native';
import player_1_image from '../assets/images/component_imgs/player_1.png'
import player_2_image from '../assets/images/component_imgs/player_2.png'
import versus_small from '../assets/images/component_imgs/versus_small.png'

const HistoryList = () => {
  const data = [
    {   id: '1', game_name:"PES 21", 
        player_1: 'Adil', score_1:2, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:4, profile_2: player_2_image
    },
    {   id: '2', game_name:"PES 21", 
        player_1: 'Adil', score_1:4, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:0, profile_2: player_2_image
    },
    {   id: '3', game_name:"PES 21",
        player_1: 'Adil', score_1:2, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:2, profile_2: player_2_image
    },
    {   id: '4', game_name:"PES 21",
        player_1: 'Adil', score_1:1, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:5, profile_2: player_2_image
    },
    {   id: '5', game_name:"PES 21",
        player_1: 'Adil', score_1:3, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:0, profile_2: player_2_image
    },
    {   id: '6', game_name:"PES 21",
        player_1: 'Adil', score_1:2, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:4, profile_2: player_2_image
    },
    {   id: '7', game_name:"PES 21",
        player_1: 'Adil', score_1:1, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:1, profile_2: player_2_image
    },
    {   id: '8', game_name:"PES 21",
        player_1: 'Adil', score_1:4, profile_1: player_1_image,
        player_2: 'Ilafer', score_2:4, profile_2: player_2_image
    },
  ];

  const renderItem = ({ item }) => (
    <View className = "flex-col border-b border-primary-200 mx-5">
        <Text className = "text-text-dark text-3xl text-center font-bold w-full py-5">{item.game_name}</Text>
        <View className="flex-row items-center  mx-6 justify-between"> 
        <Image className = "h-[70px] w-[70px]"
            source={item.profile_1}
        />
        <Text className = "text-text-dark text-3xl font-bold">{item.score_1}</Text>
        <Image className = "h-[70px] w-[30px]"
            source={versus_small}
        />
        <Text className = "text-text-dark text-3xl font-bold">{item.score_2}</Text>
        <Image className = "h-[70px] w-[70px]"
            source={item.profile_2}
        />
        </View>
        <View className = "flex-row justify-between mx-5 py-3">
            <Text className = "text-text-dark text-xl font-bold w-[70px] text-center">{item.player_1}</Text>
            <Text className = "text-text-dark text-xl font-bold w-[70px] text-center">{item.player_2}</Text>
        </View>
        
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

export default HistoryList;