import { Stack } from "expo-router";
import { useEffect,useState } from 'react'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import "./global.css"
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Epilogue-Regular': require('../assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Medium': require('../assets/fonts/Epilogue-Medium.ttf'),
    'Epilogue-SemiBold': require('../assets/fonts/Epilogue-SemiBold.ttf'),
    'Epilogue-Bold': require('../assets/fonts/Epilogue-Bold.ttf'),
  })

  useEffect(()=>{
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded,error])
if(!fontsLoaded && !error) return null
  return <Stack screenOptions={{headerShown:false}}/>;
}
