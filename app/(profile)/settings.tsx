import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomHeader from "@/components/ui/CustomHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";

interface SettingsElementProps {
  title: string;
  onPress: () => void;
}

const SettingsElement = ({ title, onPress }: SettingsElementProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between  p-2  "
    >
      <Text className="text-[#CDCDE0] text-lg font-epilogue-bold">{title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#CDCDE0" />
    </TouchableOpacity>
  );
};

const settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-black px-6">
      <CustomHeader headerText="Settings" />
      <ScrollView>
        <View className="pt-16  flex-col gap-8 ">
          <View className="flex-col gap-4">
            <Text className="text-white text-lg font-epilogue-bold">
              General
            </Text>
            <SettingsElement
              title="Reset Password"
              onPress={() => {
                router.push("/reset-password");
              }}
            />
            <SettingsElement
              title="Notifications"
              onPress={() => {
                router.push("/notification-settings");
              }}
            />
          </View>
          <View className="flex-col gap-2">
            <Text className="text-white text-lg font-epilogue-bold">
              Security
            </Text>
            <SettingsElement title="Privacy Policy" onPress={() => {}} />
            <Text className="text-[#CDCDE0] text-sm font-epilogue-regular">
              Choose what data you share with us
            </Text>
          </View>
          <CustomButton title="Logout" variant="primary" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;
