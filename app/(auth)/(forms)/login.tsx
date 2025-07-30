import CustomButton from '@/components/ui/CustomButton'
import Custominput from '@/components/ui/CustomInput'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFocused, setIsFocused] = useState(false)
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className='flex-1 flex-col gap-8 top-20'>
        <View className='flex-col gap-4'>
          <Custominput placeholder='Phone Number or Email' 
            value={email} 
            onChangeText={setEmail} 
            secureTextEntry={false} 
            keyboardType='email-address' 
            onFocus={()=>setIsFocused(true)} 
            onBlur={()=>setIsFocused(false)}/>

          <Custominput placeholder='Password' 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry={true} 
            keyboardType='default' 
            onFocus={()=>setIsFocused(true)} 
            onBlur={()=>setIsFocused(false)}/>
        </View>
         
        <Link href='/forgot-password'>
          <Text className='text-gray-300 text-sm'>Forgot Password?</Text>
        </Link>
        <CustomButton title='Login' onPress={()=>{}}/>
        <View className='flex-row gap-1 items-center justify-center'>
          <Text className='text-white text-sm'>Don't have an account ?</Text>
          <TouchableOpacity onPress={()=>router.push('/register')}>
            <Text className='text-primary text-sm'>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default login