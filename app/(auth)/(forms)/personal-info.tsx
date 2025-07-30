import UploadImage from '@/components/UploadImage'
import CustomButton from '@/components/ui/CustomButton'
import Custominput from '@/components/ui/CustomInput'
import { router } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'

const PersonalInfo = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  return (
<View className='flex-col justify-center items-center gap-6'>
  <Text>Please fill in with your personal information</Text>
  <UploadImage/>
 <View className='flex-col gap-4 w-full'>
 <Custominput placeholder='First Name' 
            value={firstName} 
            onChangeText={setFirstName} 
            secureTextEntry={false} 
            keyboardType='default' 
            onFocus={()=>setIsFocused(true)} 
            onBlur={()=>setIsFocused(false)}/>
              <Custominput placeholder='Last Name' 
            value={lastName} 
            onChangeText={setLastName} 
            secureTextEntry={false} 
            keyboardType='default' 
            onFocus={()=>setIsFocused(true)} 
            onBlur={()=>setIsFocused(false)}/>
 </View>
 <View className='w-full'>
   <CustomButton title='Next' onPress={()=>{router.push('/event-categories')}} />
 </View>

</View>
  )
}

export default PersonalInfo