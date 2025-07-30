import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    // Redirect to home page (tabs)
    router.replace('/(tabs)');
  }, []);

  return null;
} 