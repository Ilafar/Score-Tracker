import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import home from "../../assets/images/tab_icons/home.png"
import addPlayer from "../../assets/images/tab_icons/add_player.png"
import allHistory from '../../assets/images/tab_icons/all_history.png'
import leaderBoard from '../../assets/images/tab_icons/leader_board.png'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center  gap-2 w-20 h-6">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <Tabs
        screenOptions = {{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#17A33A',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle:{
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 90,
            }
        }}
    >
        <Tabs.Screen
            name='home'
            options={{
                title:"Home",
                headerShown: false,
                tabBarIcon: ({color,focused}) => (
                    <TabIcon 
                        icon = {home}
                        color = {color}
                        name = "Home"
                        focused = {focused}/>                  
                )
            }}
        />
        <Tabs.Screen
            name='leader_board'
            options={{
                title:"Leaderboard",
                headerShown: false,
                tabBarIcon: ({color,focused}) => (
                    <TabIcon 
                        icon = {leaderBoard}
                        color = {color}
                        name = "Leaderboard"
                        focused = {focused}/>                  
                )
            }}
        />
        <Tabs.Screen
            name='add_player'
            options={{
                title:"Add",
                headerShown: false,
                tabBarIcon: ({color,focused}) => (
                    <TabIcon 
                        icon = {addPlayer}
                        color = {color}
                        name = "Add"
                        focused = {focused}/>                  
                )
            }}
        />
        <Tabs.Screen
            name='all_history'
            options={{
                title:"History",
                headerShown: false,
                tabBarIcon: ({color,focused}) => (
                    <TabIcon 
                        icon = {allHistory}
                        color = {color}
                        name = "History"
                        focused = {focused}/>                  
                )
            }}
        />

    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})