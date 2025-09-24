import Foodcard from "@/components/orders/Foodcard";
import CustomFilters from "@/components/ui/CustomFilters";
import DropDown from "@/components/ui/DropDown";
import Topbar from "@/components/ui/Topbar";
import { foods, orders } from "@/data";
import React, { Component, useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

const index = () => {
  const [selected, setSelected] = useState("Recent");
  const [selectedFilter, setSelectedFilter] = useState({ label: "Menu" });
  return (
    <SafeAreaView className="flex-1 bg-black px-3">
      <Topbar />
      <FlatList
        data={foods}
        renderItem={({ item }) => (
          <Foodcard
          id={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          rating={item.rating}
        
          />
        )}
        keyExtractor={(item) => item.name ?? ""}
        numColumns={2}
        contentContainerClassName="gap-4 px-6"
        columnWrapperClassName="gap-6"
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={
          <View className="flex-col gap-4 mb-4">
            <View className="flex-row items-center justify-between px-4 ">
              <Text className="text-white font-bold text-lg">
              Event Orders
              </Text>
              <DropDown
                options={["Recent", "Popular", "Trending"]}
                selected={selected}
                setSelected={setSelected}
              />
            </View>
           <View className="px-6">
             <CustomFilters
            
              filters={[{ label: "Menu" }, { label: "Orders" }]}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
           </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default index;
