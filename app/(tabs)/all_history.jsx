import { View, Text } from 'react-native'
import React from 'react'
import HistoryList from '../../components/HistoryList'

const all_history = () => {
  return (
    <View className = "bg-background-dark w-full h-full items-center justify-center">
      <View className="
      bg-primary-100 
      flex-row justify-center items-end pb-2 h-[100px] w-full 
      border-b border-primary-400">
        <Text className = "text-white text-3xl font-bold">History</Text>
      </View>
      <HistoryList className = "w-full"/>
    </View>
  )
}

export default all_history