import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { CalendarDays, MapPin } from 'lucide-react-native';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const events = [
  {
    title: 'Summer Event',
    date: '10-May-2025',
    location: 'Serena Hotel Kigali',
    image: require('@/assets/images/ev1.png'),
  },
  {
    title: 'Music Fiesta',
    date: '15-May-2025',
    location: 'Amahoro Stadium',
    image: require('@/assets/images/ev4.png'),
  },
];

export default function UpcomingEventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="items-center justify-center mt-4">
      <Carousel
        width={width * 0.7}
        height={width * 0.9}
        data={events}
        onSnapToItem={index => setCurrentIndex(index)}
        scrollAnimationDuration={1000}
        defaultIndex={0}
        mode="parallax"
        renderItem={({ item }) => (
          <View className="bg-black rounded-3xl overflow-hidden shadow-xl">
            <Image
              source={item.image}
              className="w-full h-52 opacity-70"
              resizeMode="cover"
            />
            <View className="absolute bottom-3 left-3">
              <Text className="text-white text-lg font-semibold">
                {item.title}
              </Text>
              <View className="flex-row items-center mt-1">
                <CalendarDays color="white" size={16} />
                <Text className="text-white text-xs ml-1">{item.date}</Text>
              </View>
              <View className="flex-row items-center mt-1">
                <MapPin color="white" size={16} />
                <Text className="text-white text-xs ml-1">{item.location}</Text>
              </View>
            </View>
          </View>

        )}
      />

      
      <View className="flex-row justify-center  space-x-2 -mt-32">
        {events.map((_, index) => (
          <TouchableOpacity
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            onPress={() => setCurrentIndex(index)}
          />
        ))}
      </View>
    </View>
  );
}
