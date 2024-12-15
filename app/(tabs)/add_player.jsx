import { View, TextInput, Image, Button } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import player_2 from "../../assets/images/component_imgs/player_2.png";
import CustomButton from '../../components/CustomButton';

const add_player = () => {
  return (
    <SafeAreaView className = "bg-background-dark h-full items-center justify-center">
      <View className="flex-1 items-center justify-center">
      <TextInput className="
      rounded-lg border border-primary-100 
      w-[260px] h-[70px]
      text-center text-text-dark text-2xl "
       placeholder="Player name"
       textAlign='center'
       placeholderTextColor='rgb(34, 139, 34)'
       />
      <View className="flex-row flex-wrap justify-center gap-4 mx-10 mt-10">
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
        <Image source={player_2} className="w-24 h-24 mr-2 mb-2 w-[80px] h-[80px]" />
      </View>

      <CustomButton
        title="Add Player"
        onPress={() => console.log("Button pressed")}
        textStyles="text-text-dark font-bold text-2xl"
        containerStyles="bg-primary-100 px-8 mt-10"
      />
    </View>
    </SafeAreaView>
  )
}

export default add_player