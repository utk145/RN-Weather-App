import React from "react";
import { Image, Text, View } from "react-native";

const Forecast = () => {
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* We'll show location details here */}
      <Text className="text-white text-center text-2xl font-bold">
        Hyderabad,{" "}
        <Text className="text-lg font-semibold text-gray-300">India</Text>
      </Text>
      {/* Weather Image */}
      <View className="flex-row justify-center">
        <Image
          source={require("../../assets/images/partlycloudy.png")}
          className="w-52 h-52"
        />
      </View>
      {/* Celcius Data */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-7">
          34&#176;
        </Text>
        <Text className="text-center text-white text-xl ml-5 opacity-40 tracking-widest">
          Partly Cloudy
        </Text>
      </View>
      {/* Additional stats like humidity, sunrise-time, etc */}
      <View className="flex-row justify-between mx-4 ">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../assets/icons/wind.png")}
            className="w-6 h-6"
          />
          <Text className="text-white font-semibold text-base">22km</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../assets/icons/drop.png")}
            className="w-6 h-6"
          />
          <Text className="text-white font-semibold text-base">23%</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../assets/icons/sun.png")}
            className="w-6 h-6"
          />
          <Text className="text-white font-semibold text-base">6:15 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default Forecast;
