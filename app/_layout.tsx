import React from 'react'
import { Stack } from 'expo-router'
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';

const RootLayout = () => {

  const migrateDbIfNeeded = async (db:SQLiteDatabase) => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        score INTEGER, 
        image TEXT
      );
      CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        GameName TEXT, 
        player1 TEXT,
        score1 INTEGER,
        image1 TEXT,
        player2 TEXT,
        score2 INTEGER,  
        image2 TEXT
      );
    `)
  }


  return (
    <SQLiteProvider databaseName="FotMob.db" onInit={migrateDbIfNeeded}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown:false}}/>
    </Stack>
    </SQLiteProvider>
  )
}

export default RootLayout

