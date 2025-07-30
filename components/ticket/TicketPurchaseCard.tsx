import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TicketPurchaseProps } from '@/data'

const TicketPurchaseCard = ({category,price,remainingTickets}:TicketPurchaseProps) => {
  return (
   <View className='flex-col gap-2 rounded-lg p-3 bg-[#101010] mx-1 my-2'>
  <View className='flex-row justify-between items-center gap-5'>
    <Text className='text-[#CDCDE0] font-bold'>{category}Tickets</Text>
    <Text className='text-[#34A853] font-medium text-xs'>{remainingTickets}Tickets</Text>
  </View>
  <View className='flex-row gap-2 items-center justify-between'>
    <Text className='text-[#CDCDE0] font-bold'>{price}</Text>
    <TouchableOpacity className='bg-white rounded-full py-1 px-4'>
        <Text className='text-primary font-bold text-center'>Buy</Text>
    </TouchableOpacity>
  </View>
   </View>
  )
}

export default TicketPurchaseCard