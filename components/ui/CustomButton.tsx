import clsx from 'clsx'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary'
}

const CustomButton = ({ title, onPress, disabled, loading, variant = 'primary' }: ButtonProps) => {
  return (
   <TouchableOpacity 
     onPress={onPress} 
     disabled={disabled} 
     className={clsx(
       'flex justify-center items-center rounded-full px-10 py-4',
       variant === 'primary' ? 'bg-primary' : 'bg-white',
       disabled && 'opacity-50'
     )}
   >
     {loading ? (
       <ActivityIndicator size='small' color={variant === 'primary' ? 'white' : '#D70076'} />
     ) : (
       <Text className={clsx(
         'text-sm font-semibold text-center',
         variant === 'primary' ? 'text-white' : 'text-primary'
       )}>
         {title}
       </Text>
     )}
   </TouchableOpacity>
  )
}

export default CustomButton