import CustomButton from '@/components/ui/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import clsx from 'clsx';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
const categories = ['Art', 'Sports', 'Music', 'Culture', 'Tech', 'Film'];

export default function CategorySelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelected(prev =>
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  const getPosition = (index: number) => {
    return clsx(
      'absolute w-20 h-20 rounded-full items-center justify-center',
      index === 0 && 'left-10 top-24',
      index === 1 && 'left-[40%] top-4',
      index === 2 && 'right-10 top-24',
      index === 3 && 'left-10 bottom-24',
      index === 4 && 'left-[40%] bottom-24',
      index === 5 && 'right-10 bottom-24'
    );
  };

  const handleSave = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    router.replace('/');
  };

  return (
    <View className="flex-1 bg-black justify-center items-center relative">
      <Text className="text-white mb-10 text-center">
        Select the most event categories that interest you
      </Text>

      <View className="w-full h-96 relative">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={category}
            onPress={() => toggleCategory(category)}
            className={clsx(
              getPosition(index),
              selected.includes(category) ? 'bg-pink-600' : 'bg-neutral-800'
            )}
          >
            <Text className="text-white font-semibold">{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className='w-full'>
        <CustomButton title='Save information' onPress={handleSave} />
      </View>
    </View>
  );
}
