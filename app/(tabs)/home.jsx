import { View, Text, Image, Modal, TextInput } from 'react-native'
import { React, useCallback, useEffect, useState } from 'react'
import Fab from "../../components/Fab";
import player_1 from "../../assets/images/player_images/alligator.png";
import player_2 from "../../assets/images/player_images/goril.png";
import versus from "../../assets/images/component_imgs/versus.png";
import versus_small from "../../assets/images/component_imgs/versus_small.png";
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton';
import CustomPicker from '../../components/PlayerPicker';
import plusIcon from "../../assets/images/component_imgs/fabIcon.png";
import finishIcon from "../../assets/images/component_imgs/finish.png";
import alligator_image from '../../assets/images/player_images/alligator.png';
import bear_image from '../../assets/images/player_images/bear.png';
import cat_image from '../../assets/images/player_images/cat.png';
import fox_image from '../../assets/images/player_images/fox.png';
import rabit_image from '../../assets/images/player_images/rabit.png';
import cow_image from '../../assets/images/player_images/cow.png';
import dog_image from '../../assets/images/player_images/dog.png';
import alien_image from '../../assets/images/player_images/alien.png';
import goril_image from '../../assets/images/player_images/goril.png';

import { useSQLiteContext } from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';

const home = () => {
  const db = useSQLiteContext()

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

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [player1, setPlayer1] = useState("Player 1")
  const [player2, setPlayer2] = useState("Player 2")
  const [player1temp, setPlayer1temp] = useState("Ilafer")
  const [player2temp, setPlayer2temp] = useState("Ilafer")
  const [score1, setScore1] = useState()
  const [score2, setScore2] = useState()
  const [player1image, setPlayer1image] = useState(player_1)
  const [player2image, setPlayer2image] = useState(player_2)
  const [game, setGame] = useState("Game")
  const [gametemp, setGametemp] = useState("Game")

  const [players, setPlayers] = useState([]);

  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const result = db.getAllSync("SELECT * FROM players ");
      const updatedData = result.map((player) => {
        const imageIndex = player.image - 1; 
        const resolvedImage = images[imageIndex].source
        console.log("focuses")
        return { ...player, resolvedImage };
      });
      setData(updatedData)
    }, [db])
  );

  const saveToHistory = () => {
    db.runSync(`
      INSERT INTO games (player1, player2, score1, score2, image1, image2, GameName) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [player1, player2, score1, score2, data[data.findIndex(element => element.name === player1)].image, data[data.findIndex(element => element.name === player2)].image, game]
    )
  }

  return (
    <SafeAreaView className="bg-background-dark flex-1 items-center">
      <Text className="text-primary-100 text-3xl font-bold p-8">{game}</Text>
      <View className="flex-row justify-between items-center px-16 w-full">
        <View className="items-center gap-2">
          <Image
            source={player1image}
            className="w-20 h-20"
          />
          <Text className="text-text-dark text-[30px]">{player1}</Text>
        </View>
        <TextInput className="
            rounded-lg border border-primary-100 
            w-[60px] h-[40px]
            text-center text-text-dark text-2xl "
          placeholder="Score"
          textAlign='center'
          value={score1}
          onChangeText={(text) => setScore1(text)}
          placeholderTextColor='rgb(34, 139, 34)'
        />
      </View>

      <Image source={versus} className="my-8" />

      <View className="flex-row justify-between items-center px-16 w-full">
        <View className="items-center gap-2">
          <Image source={player2image} className="w-20 h-20" />
          <Text className="text-text-dark text-[30px]">{player2}</Text>
        </View>
        <TextInput className="
            rounded-lg border border-primary-100 
            w-[60px] h-[40px]
            text-center text-text-dark text-2xl "
          placeholder="Score"
          textAlign='center'
          value={score2}
          onChangeText={(text) => setScore2(text)}
          placeholderTextColor='rgb(34, 139, 34)'
        />
      </View>

      <View className="flex-row absolute bottom-8">
        <Fab
          title={"Finish Game"}
          buttonStyle={"bg-[#c41010]"}
          fabIcon={finishIcon}
          onPress={() => {
            try{
              db.runSync("UPDATE players SET score = score + ? WHERE name = ?", [score1, player1]);
              db.runSync("UPDATE players SET score = score + ? WHERE name = ?", [score2, player2]);
              saveToHistory()
              setGame("Game")
              setScore1("")
              setScore2("")
              setPlayer1image(alligator_image)
              setPlayer2image(goril_image)
              setPlayer1("Player 1")
              setPlayer2("Player 2")
            }
            catch(e){
              console.log(e)
            }
          }}
        />
        <Fab
          title={"Start Game"}
          buttonStyle={"bg-primary-200"}
          fabIcon={plusIcon}
          onPress={() => {
            setIsModalVisible(true)
            const result = db.getAllSync("SELECT name FROM players")
            setPlayers(result)
          }}
        />
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View className="flex-1 justify-end">
          <View className="bg-[#1a1a2b] w-full h-1/2 rounded-[20px] p-8 jutify-center items-center">

            <TextInput className="
              rounded-lg border border-primary-100 
              w-[200px] h-[50px]
              text-center text-primary-100 text-2xl "
              placeholder="Game name"
              textAlign='center'
              onChangeText={(text) => setGametemp(text)}
              placeholderTextColor='rgb(34, 139, 34)'
            />
            <View className="flex-row w-full justify-center items-center">
              <View className="justify-start h-full bottom-[20px]">
                <CustomPicker
                  players={players}
                  selectedPlayer={player1temp}
                  setSelectedPlayer={setPlayer1temp}
                />
              </View>
              <View className="h-1/3 justify-end item-center top-[30px]">
                <Image
                  source={versus_small} />
              </View>
              <View className="justify-start h-full bottom-[20px]">
                <CustomPicker
                  players={players}
                  selectedPlayer={player2temp}
                  setSelectedPlayer={setPlayer2temp}
                />
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
                onPress={() => {
                  setPlayer1(player1temp)
                  setPlayer2(player2temp)
                  setGame(gametemp)

                  const player1Obj = data.find((el) => el.name === player1temp);
                  const player2Obj = data.find((el) => el.name === player2temp);

                  setPlayer1image(player1Obj.resolvedImage || dog_image);
                  setPlayer2image(player2Obj.resolvedImage || goril_image);

                  setIsModalVisible(false)
                }}
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

export default home;
