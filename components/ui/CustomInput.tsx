import { KeyboardTypeOptions, TextInput } from 'react-native'
import { useState } from 'react'
import clsx from 'clsx'
interface CustominputProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  keyboardType?: KeyboardTypeOptions
  onFocus?: () => void
  onBlur?: () => void
}
const Custominput = ({placeholder, value, onChangeText, secureTextEntry, keyboardType, onFocus, onBlur}: CustominputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
   <TextInput
   placeholder={placeholder}
   value={value}
   onChangeText={onChangeText}
   secureTextEntry={secureTextEntry}
   keyboardType={keyboardType}
   onFocus={()=>setIsFocused(true)}
   onBlur={()=>setIsFocused(false)}
   placeholderTextColor={isFocused ? '#808080' : '#808080'}
   className={clsx('bg-[#1F1F1F] text-white rounded-lg text-sm px-4 py-4',
    isFocused && 'border-2 border-gray-500'
   )}
   />
  )
}

export default Custominput