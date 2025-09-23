import CustomButton from "@/components/ui/CustomButton";
import CustomHeader from "@/components/ui/CustomHeader";
import CustomInput from "@/components/ui/CustomInput";
import { images } from "@/constants/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";

const account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-black">
      <CustomHeader headerText="My Account" />
      <View className="flex-col   gap-8 px-4">
        <View className="mx-auto">
          <Image
            source={images.profile}
            className="relative  w-32 h-32 rounded-full"
          />
          <View className="absolute mt-20 ml-20 border-2 border-white rounded-full p-1 bg-primary">
            <Ionicons name="camera" size={24} color="white" className="" />
          </View>
        </View>
        <View className="flex-col gap-4">
          <CustomInput
            placeholder="Full Name"
            value={name}
            keyboardType="default"
            onChangeText={setName}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <CustomInput
            placeholder="Phone Number"
            value={phone}
            keyboardType="phone-pad"
            onChangeText={setPhone}
          />
        </View>
        <CustomButton title="Save" onPress={() => {}} variant="primary" />
      </View>
    </SafeAreaView>
  );
};

export default account;
