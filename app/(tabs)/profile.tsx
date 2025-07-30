import { View, Text, SafeAreaView, TouchableOpacity,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Topbar from '@/components/ui/Topbar'
import { images } from '@/constants/images'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '@/components/ui/CustomButton';
import { Router } from 'lucide-react-native';
import { router } from 'expo-router';

interface ProfileSettingsProps{
  title:string;
  icon:React.ReactNode;
  onPress:()=>void;
}

const ProfileSettings = ({title,icon,onPress}:ProfileSettingsProps) => {
 
  return (
   <TouchableOpacity className='flex-row items-center justify-between p-4 bg-[#101010] rounded-lg'>
     <View className='flex-row items-center gap-2'>
<View className=' rounded-lg bg-primary p-2'>
{icon}
</View>
      <Text className='font-epilogue-bold text-white'>{title}</Text>
    </View>
    <Ionicons name='chevron-forward' size={20} color='white'/>
   </TouchableOpacity>
  )
}

const Profile = () => {
  const [isEditing,setIsEditing] = useState(false);
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <Topbar/>
      <ScrollView>
      <View className='flex-col gap-6  px-4'>
   <View className='flex-row items-center justify-between gap-4 px-4'>
    <Text className='font-epilogue-bold text-white '>Profile</Text>
    <TouchableOpacity className='flex-row items-center gap-2' onPress={()=>setIsEditing(!isEditing)}>
      <Text className='text-primary text-sm font-epilogue-bold'>Edit Profile</Text>
     
    </TouchableOpacity>
   </View>
   <View className='flex-row items-center gap-2 px-4'>
    <Image source={images.profile} className='w-20 h-20 rounded-full' />
    <View className='flex-col gap-2'>
      <Text className='font-epilogue-bold text-white text-lg'>Deny Collins</Text>
      <Text className='text-white text-sm'>deny.collins@gmail.com</Text>
    </View>
   </View>
   <View className='flex-col gap-4 px-4'>
    <ProfileSettings title='My Account' icon={<Ionicons name='person' size={20} color='white'/>} onPress={()=>{router.push('/(profile)/account')}}/>
    <ProfileSettings title='Settings' icon={<Ionicons name='settings' size={20} color='white'/>} onPress={()=>{}}/>
    <ProfileSettings title='Help Center' icon={<Ionicons name='help-circle' size={20} color='white'/>} onPress={()=>{}}/>
    <ProfileSettings title='Contact Us' icon={<Ionicons name='chatbox' size={20} color='white'/>} onPress={()=>{}}/>
   </View>
   {isEditing &&(
    <CustomButton title='Logout' variant='primary' onPress={()=>{}}/>
   )}
   </View>
   </ScrollView>
    </SafeAreaView>
  )
}

export default Profile