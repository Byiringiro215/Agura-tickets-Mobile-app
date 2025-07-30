import { View, Text,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '@/components/ui/CustomHeader'
import Custominput from '@/components/ui/CustomInput'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  return (
   <SafeAreaView className='flex-1 bg-black px-4 flex-col gap-8 pt-20'>
   <Text className='text-white text-sm text-center'>Enter the new password for you account</Text>
  <View className='flex-col gap-4'>
  <Custominput
   placeholder='New Password'
   value={password}
   onChangeText={setPassword}
   secureTextEntry={true}
   keyboardType='default'
   onFocus={()=>setIsFocused(true)}
   onBlur={()=>setIsFocused(false)}
   />

<Custominput
   placeholder='Confirm Password'
   value={confirmPassword}
   onChangeText={setConfirmPassword}
   secureTextEntry={true}
   keyboardType='default'
   onFocus={()=>setIsFocused(true)}
   onBlur={()=>setIsFocused(false)}
   />
  </View>
   <CustomButton  title='Save Password' onPress={()=>{router.push('/account-verification')}} />
   </SafeAreaView>
  )
}

export default ResetPassword