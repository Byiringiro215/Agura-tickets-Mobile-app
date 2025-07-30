import { View, Text,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '@/components/ui/CustomHeader'
import Custominput from '@/components/ui/CustomInput'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  return (
   <SafeAreaView className='flex-1 bg-black px-4 flex-col gap-8 pt-20'>
   <Text className='text-white text-sm text-center'>Enter your phone number or email to receive the ressetion code for account recovery</Text>
   <Custominput
   placeholder='Phone Number or Email'
   value={email}
   onChangeText={setEmail}
   secureTextEntry={false}
   keyboardType='email-address'
   onFocus={()=>setIsFocused(true)}
   onBlur={()=>setIsFocused(false)}
   />
   <CustomButton  title='Send Verification Code' onPress={()=>{router.push('/reset-password')}} />
   </SafeAreaView>
  )
}

export default ForgotPassword