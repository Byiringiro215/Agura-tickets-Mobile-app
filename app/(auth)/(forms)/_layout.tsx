import CustomHeader from '@/components/ui/CustomHeader'
import { Slot, usePathname } from 'expo-router'
import { View,SafeAreaView } from 'react-native'

export default function AuthLayout() {
  const pathname = usePathname()
  
 
  const getHeaderTitle = () => {
    switch (pathname) {
      case '/login':
        return 'Login'
      case '/register':
        return 'Create Account'
      case '/forgot-password':
        return 'Forgot Password'
      case '/reset-password':
        return 'Reset Password'
      case '/personal-info':
        return 'Personal Information'
      case '/account-verification':
        return 'Verify Account'
      case '/event-categories':
        return 'Event Categories'
      default:
        return 'Authentication'
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-black px-4">
      <CustomHeader headerText={getHeaderTitle()} />
      <Slot />
    </SafeAreaView>
  )
}