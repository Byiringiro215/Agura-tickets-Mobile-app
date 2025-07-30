import CustomButton from '@/components/ui/CustomButton'
import Custominput from '@/components/ui/CustomInput'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
const RegisterMethod = ({icon}:{icon:React.ReactNode}) => {
  return (
    <TouchableOpacity className='flex-row justify-center items-center bg-white rounded-full px-8 py-2 '>
      {icon}
      
    </TouchableOpacity>
  )
}
const register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
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

<Custominput placeholder='Phone Number' 
            value={phone} 
            onChangeText={setPhone} 
            secureTextEntry={false} 
            keyboardType='phone-pad' 
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
         
      
        <CustomButton title='Signup' onPress={()=>{}}/>
          <View className='flex-row w-full justify-center gap-2'>
             <RegisterMethod icon={<AntDesign name="apple1" size={24} color="black" />}/>
             <RegisterMethod icon={<FontAwesome name="google" size={24} color="black" />}/>
             <RegisterMethod icon={<Entypo name="old-phone" size={24} color="black" />}/>
          </View>
        <View className='flex-row gap-1 items-center justify-center'>
          <Text className='text-white text-sm'>Already have an account ?</Text>
          <TouchableOpacity onPress={()=>router.push('/login')}>
            <Text className='text-primary text-sm'>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default register