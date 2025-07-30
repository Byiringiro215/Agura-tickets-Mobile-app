import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { EventProps } from '@/data'
import { images } from '@/constants/images'
import Feather from '@expo/vector-icons/Feather';
const EventCard = ({title,artist,date,location}:EventProps) => {
  return (
    <View className='flex-row items-center justify-between gap-2 rounded-lg border border-[#141414] p-1 '>
     <View>
      <Image source={images.event5} resizeMode='cover' className=' rounded-lg'/>
     </View>
     <View className='flex-col gap-1 flex-1'>
      <Text className='font-epilogue-bold text-white'>{title}</Text>
      <Text className='font-epilogue-medium text-sm text-[#CDCDE0]'>{artist}</Text>
      <Text className='font-epilogue-medium text-sm text-[#CDCDE0]'>{date}</Text>
      <Text className='font-epilogue-semibold text-sm text-[#CDCDE0]'>{location}</Text>
      <TouchableOpacity className='flex-row items-center gap-2 rounded-full bg-[#1F1F1F] p-2'>
        <Feather name='arrow-right' size={16} color='#CDCDE0'/>
        <Text className='font-epilogue-medium text-sm text-[#CDCDE0]'>View Details</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default EventCard