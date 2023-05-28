import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";


const NavSearch = () => {
    const [showToggleSearch, setShowToggleSearch] = useState(false);
    const [location, setLocation] = useState([1, 2, 3, 4, 5]);
  
    const handleLocation =(loc)=>{
      console.log("location is "+loc);
    }
  
    return (

        <View style={{ height: "7%" }} className="mx-5 relative z-50 mt-12">
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
            {location.length > 0 && showToggleSearch ? (
                <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                    {location.map((indx, loc) => {
                        let showBorder = indx != location.length;
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
                                    Hyderabad, India
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            ) : null}
        </View>

    )
}

export default NavSearch
