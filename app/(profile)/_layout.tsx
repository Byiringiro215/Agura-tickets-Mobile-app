import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="account" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="notification-settings" />
    </Stack>
    
  );
} 