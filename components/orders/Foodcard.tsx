import { foodItemProps } from "@/data";
import { navigate } from "expo-router/build/global-state/routing";
import React, { Component } from "react";
import { Text, View, Image,TouchableOpacity } from "react-native";

interface FoodcardProps extends foodItemProps {
  onPress?: () => void;
}
const Foodcard = ({ id,image, name, description, rating,onPress }: FoodcardProps) => {
  return (
    <TouchableOpacity
    onPress={()=>navigate(`/order/${id}`)}
    >
      <View className="rounded-2xl bg-[#101010] px-2 py-1 w-60 h-56">
      <Image
        source={image ? image : require("@/assets/images/burger.png")}
        className="size-28"
      />
      <View className="px-2 py-1">
        <Text className="font-semibold text-white text-sm">{name}</Text>
        <Text className=" text-white/50 text-xs py-1  " numberOfLines={2}>{description}</Text>
        <View className="flex-row justify-between  py-2 items-center">
          <View className="flex-row items-center gap-1 text-xs">
           <Text> ⭐</Text>
            <Text className="text-white/50 text-xs font-semibold ">{rating}</Text>
          </View>
         <Text> ❣️</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default Foodcard;
