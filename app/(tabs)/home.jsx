import { View, Text, Image, Modal,TextInput } from 'react-native'
import {React, useState} from 'react'
import Fab from "../../components/Fab";
import player_1 from "../../assets/images/component_imgs/player_1.png";
import player_2 from "../../assets/images/component_imgs/player_2.png";
import versus from "../../assets/images/component_imgs/versus.png";
import versus_small from "../../assets/images/component_imgs/versus_small.png";
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton';
import CustomPicker from '../../components/PlayerPicker';

const home = () => {
  const [isModalVisible,setIsModalVisible] = useState(false)
  return (
    <SafeAreaView className="bg-background-dark flex-1 items-center">
      <Text className = "text-white text-3xl font-bold p-8">PES 21</Text>
      <View className="flex-row justify-between items-center px-16 w-full">
        <View className="items-center gap-2">
          <Image source={player_1} className="w-20 h-20" />
          <Text className="text-text-dark text-[30px]">Ilafer</Text>
        </View>
        <TextInput className="
            rounded-lg border border-primary-100 
            w-[60px] h-[40px]
            text-center text-text-dark text-2xl "
              placeholder="Score"
              textAlign='center'
              placeholderTextColor='rgb(34, 139, 34)'
          />
      </View>

      <Image source={versus} className="my-8" />

      <View className="flex-row justify-between items-center px-16 w-full">
        <View className="items-center gap-2">
          <Image source={player_2} className="w-20 h-20" />
          <Text className="text-text-dark text-[30px]">Adil</Text>
        </View>
        <TextInput className="
            rounded-lg border border-primary-100 
            w-[60px] h-[40px]
            text-center text-text-dark text-2xl "
              placeholder="Score"
              textAlign='center'
              placeholderTextColor='rgb(34, 139, 34)'
          />
      </View>

      <View className="absolute bottom-8">
        <Fab 
          onPress = {()=>setIsModalVisible(true)}
        />
      </View>

      <Modal 
        visible={isModalVisible} 
        animationType="slide"
        transparent = {true}
      >
       <View className="flex-1 justify-end">
        <View className="bg-[#1a1a2b] w-full h-1/2 rounded-[20px] p-8 jutify-center items-center">

          <TextInput className="
            rounded-lg border border-primary-100 
            w-[200px] h-[50px]
            text-center text-text-dark text-2xl "
              placeholder="Game name"
              textAlign='center'
              placeholderTextColor='rgb(34, 139, 34)'
          />
          <View className="flex-row w-full justify-center items-center"> 
            <View  className = "justify-start h-full bottom-[20px]">
              <CustomPicker/>
            </View>
            <View className = "h-1/3 justify-end item-center top-[30px]">
              <Image 
                  source={versus_small}/>
            </View>
            <View  className = "justify-start h-full bottom-[20px]">
              <CustomPicker/>
            </View>
          </View>
          <View className="absolute bottom-20 flex-row justify-between items-center w-full space-x-4">
            <CustomButton
              title={"Close"}
              onPress={() => setIsModalVisible(false)}
              containerStyles={"border-primary-200 bg-background-dark border-2 w-40"}
              textStyles={"text-text-dark"}
            />

            <CustomButton
              title={"Start"}
              onPress={() => setIsModalVisible(false)}
              containerStyles={"bg-primary-200 w-40"}
              textStyles={"text-text-dark"}
            />
          </View>
        </View>
      </View>
      </Modal>
    </SafeAreaView>

  )
}

export default home