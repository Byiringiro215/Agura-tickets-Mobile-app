import CustomHeader from '@/components/ui/CustomHeader';
import TicketCard from '@/components/ticket/TicketPurchaseCard';
import Topbar from '@/components/ui/Topbar';
import { images } from '@/constants/images';
import { tickets } from '@/data';
import { useEventStore } from '@/store/useEvent';
import { CalendarIcon, MapPinIcon } from 'lucide-react-native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import EventMap from '@/components/events/EventMap';
interface InfoProps{
  title:string;
  value:string;
  icon?:React.ReactNode;
}

const Info=({title,value,icon}:InfoProps)=>(
<View className='flex-row items-center justify-between text-sm text-white'>
  <Text className='text-white'>{title}</Text>
  <View className='flex-row items-center gap-1'>
  {icon && icon}
  <Text className='text-white'>{value}</Text>
  </View>
 
</View>
)

const EventScreen = () => {
  const {selectedEvent}=useEventStore();
  return (
    <SafeAreaView className='flex-1 bg-black px3'>
      <Topbar/>
      <CustomHeader  headerText={selectedEvent?.title ?? ""} />
      <ScrollView>
        <View className=''>
          <Image source={images.event6} resizeMode='cover' className='w-full h-64'/>
        </View>
        <View className='gap-1 my-4 px-2'>
          <Info title='Organizer' value={selectedEvent?.artist ?? ""} />
          <Info title='Date' value={selectedEvent?.date ?? ""} icon={<CalendarIcon color='white' size={16}/>} />
          <Info title='Location' value={selectedEvent?.location ?? ""} icon={<MapPinIcon color='white' size={16}/>} />
        </View>
        <View className='flex-col gap-2 '>
          <Text className='text-[#CDCDE0] font-bold ml-2'>Tickets</Text>
          <View className='flex-row flex-wrap '>
            {tickets.map((item) => (
              <View key={item.id} className='w-1/2'>
                <TicketCard
                  category={item.category}
                  price={item.price}
                  remainingTickets={item.remainingTickets}
                />
              </View>
            ))}
          </View>
        </View>
        <View className="p-4 bg-black flex-1 mb-10">
      <Text className="text-white text-lg font-bold mb-2">Location</Text>
      <EventMap />
    </View>
      </ScrollView>
    </SafeAreaView>
  ) 
}

export default EventScreen