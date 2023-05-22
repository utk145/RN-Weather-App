import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { theme } from '../theme';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"


const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style='light' />
      <Image source={require("../assets/images/bg.png")} blurRadius={70} className="absolute h-full w-full" />

      <SafeAreaView className="flex flex-1">
        {/* Search Box*/}
        <View style={{ height: "7%" }} className="mx-5 relative z-50 mt-12">
          <View className="flex-row items-center justify-end rounded-full" style={{ backgroundColor: theme.bgWhite(0.2) }}>
            <TextInput placeholder='Enter city name' placeholderTextColor={"lightgray"} className="pl-6 h-10 flex-1 text-base text-white pb-1"></TextInput>
            <TouchableOpacity style={{ backgroundColor: theme.bgWhite(.3) }} className="p-3 m-1 rounded-full">
              <MagnifyingGlassIcon color="white"  size="28"/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

    </View>
  )
}


export default HomeScreen;