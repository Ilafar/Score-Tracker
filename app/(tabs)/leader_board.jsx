import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LeaderBoardList from '../../components/LeaderBoardList'

const leader_board = () => {
  return (
    <View className="
    bg-background-dark 
    w-full h-full items-center justify-center
    border-b border-primary-400">
      <View className="bg-primary-100 flex-row justify-center items-end pb-2 h-[100px] w-full ">
        <Text className = "text-white text-3xl font-bold">Rank</Text>
        <Text className = "text-white text-3xl font-bold px-[75px]">Player</Text>
        <Text className = "text-white text-3xl font-bold">Score</Text>
      </View>
      <LeaderBoardList className = "w-full"/>
    </View>
  )
}

export default leader_board