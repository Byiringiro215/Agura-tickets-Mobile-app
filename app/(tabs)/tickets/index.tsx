import CustomFilters from '@/components/ui/CustomFilters'
import DropDown from '@/components/ui/DropDown'
import EventTicketCard from '@/components/events/EventTicketCard'
import Topbar from '@/components/ui/Topbar'
import { eventTickets } from '@/data'
import { useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'


const index = () => {
  const [selected, setSelected] = useState('Recent');
  const [selectedFilter, setSelectedFilter] = useState({label:'AllEvents',value:'50'});
  return (
  <SafeAreaView className='flex-1 bg-black px-3'>
    <Topbar/>
    <FlatList
    data={eventTickets}
    renderItem={({item})=>(
      <EventTicketCard
      artist={item.artist}
      price={item.price}
      ticketType={item.ticketType}
      ticketCount={item.ticketCount}
    
      />
    )}
    keyExtractor={(item)=>item.id ?? ""}
        
    ListHeaderComponent={
      <View className='flex-col gap-4 mb-4'>
      <View className='flex-row items-center justify-between px-2 '>
        <Text className='text-white font-bold text-lg'>Event Tickets</Text>
           <DropDown 
           options={['Recent','Popular','Trending']}
            selected={selected} setSelected={setSelected}/>

      </View>
      <CustomFilters
      filters={[{label:'AllEvents',value:'50'},{label:'Booked Events',value:'10'}]}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      />
      </View>
    }
    />
  </SafeAreaView>
  )
}

export default index