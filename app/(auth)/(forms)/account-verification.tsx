// app/screens/OtpScreen.tsx or OtpScreen.jsx
import { useState } from 'react';
import { Text, View } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import CustomButton from '@/components/ui/CustomButton';
import { router } from 'expo-router';


const CELL_COUNT = 5;



export default function AccountVerification() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  const handleComplete = (otp: string) => {
    console.log("OTP Entered:", otp);
    // Call backend verification API here
  };

  return (
    <View className="flex-1  px-5 pt-20 gap-12">
      <Text className="text-white text-sm text-center">We have sent verification code on your email or 
      phone use it to activate your account</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          if (text.length === CELL_COUNT) handleComplete(text);
        }}
        cellCount={CELL_COUNT}
        rootStyle={{ flexDirection: 'row', gap: 8 }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            className={`w-12 h-14 border-2 rounded-xl items-center justify-center bg-[#1F1F1F] ${
              isFocused ? 'border-primary' : 'border-gray-500'
            }`}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text className="text-2xl text-black dark:text-white">
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <CustomButton title='Verify Account' onPress={()=>{router.push('/personal-info')}} />
    </View>
  );
}
