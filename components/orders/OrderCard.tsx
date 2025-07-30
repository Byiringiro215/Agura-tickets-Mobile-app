import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { OrderProps } from '@/data'

const OrderCard = ({category,quantity,price,order}:OrderProps) => {
    return(
    <View className='rounded-2xl bg-[#101010] p-2 flex-row items-center justify-between'>
      <View className='flex-row gap-3 items-center'>
        <Image source={images.drinks} resizeMode='cover' className='rounded-2xl'/>
        <View className='flex-col gap-1'>
          <Text className='font-epilogue-bold text-white'>{category}</Text>
          <Text className='font-epilogue-medium text-sm text-[#CDCDE0]'>{order}</Text>
          <Text className='font-epilogue-medium text-sm text-primary'>{price}</Text>
        </View>
      </View>
      <View className='flex-col gap-1 items-center'>
        <Text className='font-epilogue-bold text-white'>{quantity}</Text>
        <TouchableOpacity>
            <Text className='font-epilogue-bold text-primary underline '>Order Again</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default OrderCard