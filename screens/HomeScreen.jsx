import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  View,
} from "react-native";
import Forecast from "./components/Forecast";
import ForecastNext from "./components/ForecastNext";
import NavSearch from "./components/NavSearch";

const HomeScreen = () => {


  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg.png")}
        blurRadius={70}
        className="absolute h-full w-full"
      />

      <SafeAreaView className="flex flex-1">
        {/* Search Box*/}
        <NavSearch />

        {/* Forecast Section*/}
        <Forecast />

        {/* Forecast Section for next day*/}
        <ForecastNext/>

      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
