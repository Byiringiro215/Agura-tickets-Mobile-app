import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

interface SectionProps {
    title:string;
    link?:string;
    children:React.ReactNode;
}
const Section = ({title,link,children}:SectionProps) => {
  return (
    <View className='py-3 flex-col gap-2'>
      <View className='flex-row justify-between items-center py-1'>
<Text className='font-epilogue-bold text-white '>{title}</Text>
{link && (
<TouchableOpacity onPress={()=>router.push(link as any)}   >
<Text className='font-epilogue-medium text-primary'>See All</Text>
</TouchableOpacity>)}
      </View>
      {children}
    </View>
  )
}

export default Section