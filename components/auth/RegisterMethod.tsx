import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
interface RegisterMethodProps {
  method: string
  icon: React.ReactNode
 
}
const RegisterMethod = ({method, icon}: RegisterMethodProps) => {
  return (
    <TouchableOpacity className='bg-white rounded-full flex-row justify-center items-center gap-4 w-full px-8 py-3'>
        {icon}
        <Text className='text-sm font-epilogue-medium text-black'>{method}</Text>
    </TouchableOpacity>
  )
}

export default RegisterMethod