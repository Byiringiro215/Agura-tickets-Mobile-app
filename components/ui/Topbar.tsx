import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import Ionicons from '@expo/vector-icons/Ionicons'

const Topbar = () => {
  return (
    <View className='flex-row justify-between items-center py-2 px-4 bg-black'>
   <View>
    <Image source={images.logo} resizeMode='contain' className='size-20'/>
   </View>
   <View className='flex-row items-center gap-3'>
    <TouchableOpacity >
        <Ionicons name='search' size={24} color='#CDCDE0'/>
    </TouchableOpacity>
    <TouchableOpacity>
        <Ionicons name='notifications' size={24} color='#CDCDE0'/>
    </TouchableOpacity>
    <TouchableOpacity className='rounded-full bg-white '>
    <Image source={images.profile} resizeMode='contain' className='w-10 h-10 rounded-full'/>
    </TouchableOpacity>
   </View>
    </View>
  )
}

export default Topbar