import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { weatherImages } from "../constants";

const HomeScreen = () => {
  const [showToggleSearch, setShowToggleSearch] = useState(false);
  const [locations, setLocation] = useState([1, 2, 3]);

  // This state is to store the data received from search
  const [weather, setWeather] = useState({});

  const handleLocation = (loc) => {
    console.log("location is " + loc);
    setLocation([]);
    setShowToggleSearch(false);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setWeather(data);
      console.log("Received Forecast ", data);
    });
  };

  const handleSearch = (value) => {
    // console.log("Value: ", value);
    // fetching locations
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        // console.log("Location received as:  ", data);
        setLocation(data);
      });
    }
  };
  const handletextDebounce = useCallback(debounce(handleSearch, 1200), []); // to handle the wait time while entering search

  useEffect(() => {
    fetchFirstWeather();
  }, []);

  const fetchFirstWeather = async () => {
    fetchWeatherForecast({ cityName: "Hyderabad", days: "7" }).then((data) => {
      setWeather(data);
    });
  };

  const { current, location, forecast } = weather; // Destructuring from weather element

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg.png")}
        blurRadius={70}
        className="absolute h-full w-full"
      />

      <SafeAreaView className="flex flex-1 mt-12">
        {/* Search Box*/}
        <View style={{ height: "7%" }} className="mx-5 relative z-50 mb-3 ">
          <View
            className="flex-row items-center justify-end rounded-full"
            style={{
              backgroundColor: showToggleSearch
                ? theme.bgWhite(0.2)
                : "transparent",
            }}
          >
            {showToggleSearch ? (
              <TextInput
                placeholder="Enter city name"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 flex-1 text-base text-white pb-1"
                onChangeText={handletextDebounce}
              ></TextInput>
            ) : null}
            <TouchableOpacity
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="p-3 m-1 rounded-full"
              onPress={() => setShowToggleSearch(!showToggleSearch)}
            >
              <MagnifyingGlassIcon color="white" size="28" />
            </TouchableOpacity>
          </View>
          {/* Search Result Section */}
          {locations.length > 0 && showToggleSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, indx) => {
                let showBorder = indx + 1 != locations.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    key={indx}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1 " +
                      borderClass
                    }
                    onPress={() => handleLocation(loc)}
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text className="text-black text-lg ml-2">
                      {/* Hyderabad, India */}
                      {loc?.name}
                      {loc?.country && `, ${loc.country}`}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        {/* Forecast Section*/}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/* We'll show location details here */}
          <Text className="text-white text-center text-2xl font-bold">
            {location?.name},{" "}
            <Text className="text-lg font-semibold text-gray-300">
              {location?.country}
            </Text>
          </Text>
          {/* Weather Image */}
          <View className="flex-row justify-center">
            <Image
              // source={require("../assets/images/partlycloudy.png")}
              // source={{uri: "https:"+current?.condition?.icon}}
              source={weatherImages[current?.condition?.text]}
              className="w-52 h-52"
            />
          </View>
          {/* Celcius Data */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-7">
              {current?.temp_c}&#176;
            </Text>
            <Text className="text-center text-white text-xl ml-5 opacity-40 tracking-widest">
              {current?.condition?.text}
            </Text>
          </View>
          {/* Additional stats like humidity, sunrise-time, etc */}
          <View className="flex-row justify-between mx-4 ">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/wind.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                {current?.wind_kph}km
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/drop.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                {current?.humidity}%
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/sun.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                {forecast?.forecastday?.[0]?.astro?.sunrise}
              </Text>
            </View>
          </View>
        </View>

        {/* Forecast Section for next day*/}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size="22" color="white" />
            <Text className="text-white text-base">Daily Forecast</Text>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            {weather?.forecast?.forecastday.map((item, indx) => {
              let date = new Date(item?.date);
              let options = { weekday: "long" };
              let dayName = date.toLocaleDateString("en-US", options);
              return (
                <View
                  className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4"
                  style={{ backgroundColor: theme.bgWhite(0.15) }}
                  key={indx}
                >
                  <Image
                    source={weatherImages[item?.day?.condition?.text]}
                    className="w-11 h-11"
                  />
                  <Text className="text-white">{dayName.split(",")[0]}</Text>
                  <Text className="text-white text-xl font-semibold">
                    {item?.day?.avgtemp_c}&#176;
                  </Text>
                </View>
              );
            })}

            {/* <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View>
            <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Tuesday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View>
            <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Wednesday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View>
            <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Thursday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View>
            <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Friday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View>
            <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Saturday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View>
            <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
              <Image source={require("../assets/images/heavyrain.png")} className="w-11 h-11" />
              <Text className="text-white">Sunday</Text>
              <Text className="text-white text-xl font-semibold">37&#176;</Text>
            </View> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
// 35 26
