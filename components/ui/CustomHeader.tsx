import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

interface CustomHeaderProps {
  headerText: string;
  
}

const CustomHeader = ({ headerText }: CustomHeaderProps) => {
  return (
    <View className='flex-row items-center gap-5 bg-black px-4 py-3 mt-2'>
         <View className=' p-0.5 bg-[#101010] rounded-full'>
         <Ionicons 
            name="chevron-back" 
            size={30} 
            color="white"
            onPress={()=>router.back()}
          />
         </View>
      <Text className='text-white text-lg font-epilogue-bold'>{headerText}</Text>
    </View>
  )
}

export default CustomHeader