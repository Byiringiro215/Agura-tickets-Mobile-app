import React from 'react'
import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import CustomHeader from '@/components/ui/CustomHeader'
import { images } from '@/constants/images'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import RegisterMethod from '@/components/auth/RegisterMethod';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
const RegisterMethods = () => {
  return (
    <SafeAreaView className='flex-1 bg-black px-3 flex-col gap-8'>
      <CustomHeader headerText='Dont have an account ?'/>
      <Image source={images.illustrator} resizeMode='contain' className='w-full h-56'/>
      <View className='flex-col gap-2 justify-center items-center'>
        <Text className='text-white text-3xl  text-center font-epilogue-bold'>Buy your <Text className='text-primary'>Event ticket</Text> withAgura Platform</Text>
        <Text className='text-white text-sm text-center'>Sign up to our app and start buying your ticket easily and faster</Text>
      </View>
   <View className='flex-col gap-3 w-full'>
    <RegisterMethod method='Register with Apple' icon={<AntDesign name="apple1" size={24} color="black" />}/>
    <RegisterMethod method='Register with Google' icon={<FontAwesome name="google" size={24} color="black" />}/>
    <RegisterMethod method='Register with Gmail' icon={<Fontisto name="email" size={24} color="black" />}/>
    <RegisterMethod method='Register with Phone' icon={<Entypo name="old-phone" size={24} color="black" />}/>
   </View>
   <View className='flex-row gap-1 items-center justify-center'>
    <Text className='text-white text-sm'>Already have an account ?</Text>
    <TouchableOpacity onPress={()=>router.push('/login')}>
      <Text className='text-primary text-sm'>Login</Text>
    </TouchableOpacity>
   </View>
    </SafeAreaView>
  )
}

export default RegisterMethods