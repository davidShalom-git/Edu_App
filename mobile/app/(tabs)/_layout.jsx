import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

export default function _layout() {
  return (
   <Tabs 
    screenOptions={{headerShown: false,
        tabBarActiveTintColor: "white",
        headerTitleStyle: {
            color: 'black',
            fontWeight: 600
   },
   headerShadowVisible: false,
   tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: 'black',
        paddingTop:5,
        height: 60,
        marginBottom: 20,
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 20,
   }
    }}
   
   >

    <Tabs.Screen name='index'
    options={{
        title: 'Home',
        tabBarIcon: ({color,size}) => (
            <Ionicons name='home' size={20} color={color} />
        )
    }}
    />
    <Tabs.Screen name='pdf'
    options={{
        title: 'Study',
        tabBarIcon: ({color,size}) => (
            <Ionicons name='book' size={20} color={color} />
        )
    }}
    />
    <Tabs.Screen name='video'
    options={{
        title: 'Video',
        tabBarIcon: ({color,size}) => (
            <Ionicons name='play' size={20} color={color} />
        )
    }}
    />


   </Tabs>
  )
}