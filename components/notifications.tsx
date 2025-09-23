import { images } from "@/constants/images";
import { NotificationProps } from "@/data";
import { Image, Text, View } from "react-native";

const notifications = ({ title, description, time }: NotificationProps) => {
  return (
    <View className="flex-row items-center justify-between px-4">
      <View className="relative rounded-lg p-1 bg-[#34A853] w-10 h-10 mr-2">
        <Image
          source={images.notification}
          resizeMode="contain"
          className="w-full h-full"
        />
        <View className="absolute top-0 right-0 bg-[#FFAE58] border-2 border-white rounded-full w-5 h-5"></View>
      </View>
      <View className="flex-col gap-1 flex-1 mr-2">
        <Text className="text-white text-lg font-epilogue-bold">{title}</Text>
        <Text
          className="text-white text-sm font-epilogue-regular truncate"
          numberOfLines={1}
        >
          {description}
        </Text>
      </View>
      <Text className="text-white text-sm font-epilogue-regular">{time}</Text>
    </View>
  );
};

export default notifications;
