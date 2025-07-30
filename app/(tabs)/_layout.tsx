import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: 16,
          height: 60,
          position: 'absolute',
          bottom: 35,
          backgroundColor: '#111111',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.4,
          shadowRadius: 12,
          elevation: 15,
          borderColor: '#111111',
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#D70076', 
        tabBarInactiveTintColor: '#6B7280', 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View className={`items-center justify-center p-1.5 min-w-10 min-h-10 `}>
              <FontAwesome5 name="home" color={color} size={focused ? 24 : 22} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="events/index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View className={`items-center justify-center p-1.5 min-w-10 min-h-10 `}>
              <MaterialIcons name="emoji-events" color={color} size={focused ? 22 : 20} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tickets/index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View className={`items-center justify-center min-w-10 min-h-10 border-2 border-gray-500 border-solid  rounded-full  `}>
              <FontAwesome5 name="ticket-alt" color={color} size={focused ? 22 : 20} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View className={`items-center justify-center p-1.5 min-w-10 min-h-10 `}>
              <MaterialIcons name="notifications-active" color={color} size={focused ? 22 : 20} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View className={`items-center justify-center p-1.5 min-w-10 min-h-10 `}>
              <FontAwesome5 name="user" color={color} size={focused ? 22 : 20} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}