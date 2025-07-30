import UpcomingEventsCarousel from '@/components/events/UpcomingEventsCoursel'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import { Text, View } from 'react-native'

const onboarding = () => {
  return (
    
      <View className='flex-1 flex-col gap-8 bg-black items-center justify-center px-4'>
      <View className='w-full'>
        <UpcomingEventsCarousel/>
      </View>
     <View className='flex-center gap-2 '>
      <Text className='text-3xl font-bold text-white text-center font-epilogue-bold'>Enjoy Endless Events Expriences with Agura</Text>
      <Text className='text-[#CDCDE0] text-sm text-center'>Agura Ticketing platform is here for your events grab your tickets have fun in one platform</Text>
     </View>
     <View className='flex flex-row justify-between items-center gap-5 '>
      <CustomButton title='Login' variant='primary' onPress={()=>{router.push('/login')}}/>
      <CustomButton title='Signup' variant='secondary' onPress={()=>{router.push('/register')}}/>
     </View>
    </View>
  
  )
}

export default onboarding