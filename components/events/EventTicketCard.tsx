import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { EventTicketProps } from '@/data'

const EventTicketCard = ({artist,price,ticketType,ticketCount}:EventTicketProps) => {
  return (
    <View className='flex-row items-center justify-between p-4 bg-[#101010] rounded-2xl  my-2 mx-5'>
     <View className='flex-row items-center gap-2'>
        <Image source={images.mainevent} className='w-20 h-20 rounded-2xl' />
        <View className='flex-col'>
            <Text className='text-white font-bold'>{artist}</Text>
            <Text className='text-white  text-sm'>{ticketType}</Text>
            <Text className='text-primary font-bold '>{price}</Text>
        </View>
     </View>
     <View className='flex-col items-center gap-2'>
        <Text className='text-white font-bold'>{ticketCount}</Text>
       <TouchableOpacity >
        <Text className='text-primary font-bold'>Buy</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default EventTicketCard