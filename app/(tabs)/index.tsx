import EventCard from "@/components/events/EventCard";
import UpcomingEventsCarousel from "@/components/events/UpcomingEventsCoursel";
import Section from "@/components/layout/Section";
import OrderCard from "@/components/orders/OrderCard";
import Topbar from "@/components/ui/Topbar";
import { events, orders } from "@/data";
import { useEventStore } from "@/store/useEvent";
import { router } from "expo-router";
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
export default function Index() {
  const { setSelectedEvent } = useEventStore();
  return (
    <SafeAreaView className="flex-1 bg-black px-3">
      <Topbar />
      <ScrollView>
        <Section title="Upcoming Events" link="/events">
          <UpcomingEventsCarousel />
        </Section>

        <Section title="Available Events" link="/events">
          <View>
            <FlatList
              data={events}
              renderItem={({ item, index }) => (
                <TouchableOpacity 
                onPress={() => {
                  setSelectedEvent(item);
                  console.log(item.id)
                  router.push(`/events/${item.id}`);
                }}>
                  <EventCard
                    id={item.id}
                    title={item.title}
                    artist={item.artist}
                    date={item.date}
                    location={item.location}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ gap: 10 }}
              scrollEnabled={false}
            />
          </View>
        </Section>

        <Section title="Booked Events" link="/events">
          <FlatList
            data={events}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => {
                setSelectedEvent(item);
                router.push(`/events/${item.id}`);
              }}>
                <EventCard
                  id={item.id}
                  title={item.title}
                  artist={item.artist}
                  date={item.date}
                  location={item.location}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ gap: 10 }}
            scrollEnabled={false}
          />
        </Section>
        <Section title="Orders" link="#" >
          <FlatList
            data={orders}
            renderItem={({ item, index }) => (
              <OrderCard category={item.category} quantity={item.quantity} price={item.price} order={item.order} />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ gap: 10 }}
            scrollEnabled={false}
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}
