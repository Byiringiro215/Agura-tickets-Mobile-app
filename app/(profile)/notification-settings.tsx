import { View, Text, SafeAreaView ,Switch, ScrollView} from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '@/components/ui/CustomHeader'

const NotificationElement = ({title,onPress}:{title:string,onPress:()=>void}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch=()=>{
    setIsEnabled(!isEnabled);
  }
  return(
    <View className='flex-row items-center justify-between px-4 '>
      <Text className='text-white text-lg font-epilogue-bold'>{title}</Text>
      <Switch
        trackColor={{ false: 'gray', true: '#D70076' }}
        thumbColor={'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}


const NotificationSettings = () => {
  return (
  <SafeAreaView className='flex-1 bg-black'>
    <CustomHeader headerText='Notification Settings'/>
    <ScrollView>
      <View className='flex-col gap-2'>
        <NotificationElement title='Event alert' onPress={()=>{}}/>
        <NotificationElement title='Orders alert' onPress={()=>{}}/>
        <NotificationElement title='Sort Events alert' onPress={()=>{}}/>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default NotificationSettings