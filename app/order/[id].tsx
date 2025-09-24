import CustomHeader from "@/components/ui/CustomHeader";
import Topbar from "@/components/ui/Topbar";
import { foodItemProps, foods } from "@/data";
import { useRoute } from "@react-navigation/native";
import CustomButton from "@/components/ui/CustomButton";

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const OrderDetails = () => {
  const { width } = useWindowDimensions();

  const route = useRoute();
  const { id } = route.params as { id: string };
  const food = foods.find((f) => f.id === Number(id));
  console.log(food);

  if (!food) {
    return (
      <SafeAreaView className="flex-1 bg-black px-3">
        <Topbar />
        <CustomHeader headerText="Event Menu" />
        <View className="flex-1 justify-center items-center">
          <Text className="text-white">Food item not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const [count,setCount]=useState(1);
  const handleIncrement = () => {
    setCount((prev)=>prev+1);
  }
  const handleDecrement = () => {
    if(count>0){
      setCount((prev)=>prev-1);
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-black ">
      <Topbar />
      <CustomHeader headerText="Event Menu" />
      <ScrollView className="flex-1 px-10">
        <View className="py-6  flex-col gap-3 items-center w-full ">
          <View className="rounded-2xl bg-[#101010] size-[15rem]">
            <Image
              source={food?.image ? { uri: food.image } : require("@/assets/images/burger.png")}
              className="size-[75%] rounded-2xl   m-auto"
              resizeMode="cover"
            />
          </View>

          <View className="bg-primary py-3 px-8 rounded-full flex-row items-center  gap-6">
            <TouchableOpacity
            onPress={()=>handleDecrement()}
            >
              <Text className="text-white text-2xl font-semibold">-</Text>
            </TouchableOpacity>
            <Text className="text-white text-lg font-semibold">{count}</Text>
            <TouchableOpacity
             onPress={()=>handleIncrement()}
            >
              <Text className="text-white text-2xl font-semibold">+</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-col items-center gap-2">
            <Text className="text-3xl font-bold font-epilogue-bold text-white">
              {food.name}
            </Text>
            <View className="flex-row justify-between p-2 gap-2">
              <View className="flex-row gap-1 items-center text-xs text-white">
                <Text>⭐</Text>
                <Text className="text-white">{food.rating}</Text>
              </View>
              <View className="flex-row gap-1 items-center text-xs text-white">
                <Text>🔥</Text>
                <Text className="text-white">300cal</Text>
              </View>
              <View className="flex-row gap-1 items-center text-xs text-white">
                <Text>⏱️</Text>
                <Text className="text-white">5-10min</Text>
              </View>
            </View>
            <Text className="font-semibold text-center  text-sm text-white p-2">
              {food.description}
            </Text>

            <CustomButton 
            title="Add to Cart" 
            onPress={() => {}} 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default OrderDetails;
