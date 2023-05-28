import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "../../theme";

const ForecastNext = () => {
    return (
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
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Monday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Tuesday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Wednesday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Thursday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Friday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Saturday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>
                <View className="flex items-center justify-center w-24 rounded-2xl py-3 space-y-1 mr-4" style={{ backgroundColor: theme.bgWhite(.15) }}>
                    <Image source={require("../../assets/images/heavyrain.png")} className="w-11 h-11" />
                    <Text className="text-white">Sunday</Text>
                    <Text className="text-white text-xl font-semibold">37&#176;</Text>
                </View>

            </ScrollView>
        </View>
    );
};

export default ForecastNext;
