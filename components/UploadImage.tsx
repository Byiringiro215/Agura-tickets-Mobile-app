import { useState } from 'react';
import { Image, View, Alert, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RoundedImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('Permission Denied', 'Please allow access to your photos.');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1], // square crop
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="items-center mt-6 ">
      <TouchableOpacity onPress={handlePickImage}>
        {image ? (
          <Image source={{ uri: image }} className="w-32 h-32 rounded-full " />
        ) : (
          <View className="w-32 h-32 rounded-full bg-[#1F1F1F] items-center justify-center border border-dashed border-gray-400">
            <Text className="text-white">Upload</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
