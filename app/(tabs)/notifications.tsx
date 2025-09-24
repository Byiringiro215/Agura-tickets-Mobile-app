import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '@/components/ui/CustomHeader'
import Topbar from '@/components/ui/Topbar'
import Notifications from '@/components/notifications'
import { notifications as notificationData } from '@/data'

const notifications = () => {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      {/* <Topbar/> */}
      <CustomHeader headerText='Notifications'/>
      <ScrollView className='flex-1 px-4'>
        <View className='flex-col gap-4'>
        <Text className='text-white text-lg font-epilogue-bold'>Today</Text> 
            {notificationData.today.map((notification)=>(
            <Notifications key={notification.id} {...notification}/>
          ))}
          <Text className='text-white text-lg font-epilogue-bold'>Yesterday</Text> 
          {notificationData.yesterday.map((notification)=>(
            <Notifications key={notification.id} {...notification}/>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default notifications