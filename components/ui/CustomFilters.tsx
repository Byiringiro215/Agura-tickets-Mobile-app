import clsx from "clsx";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface FilterItem {
  label: string;
  value?: string;
}

interface CustomFiltersProps {
  filters: FilterItem[];
  selectedFilter?: FilterItem;
  setSelectedFilter?: (filter: FilterItem) => void;
  handleFilter?: (filter: FilterItem) => void;
}

const CustomFilters = ({
  filters,
  selectedFilter,
  setSelectedFilter,
}: CustomFiltersProps) => {
  return (
    <View>
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.value ?? item.label}
       contentContainerClassName="gap-4"
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedFilter?.(item)}
            className={clsx(
              "flex-row items-center justify-center gap-2 bg-[#101010]  rounded-full px-8 py-3 mr-2",
              ((selectedFilter?.value ?? selectedFilter?.label) ===
                (item.value ?? item.label)) &&
                "bg-primary "
            )}
          >
            <View className="flex-row items-center gap-2 ">
              <Text className="text-white text-sm">{item.label}</Text>
              {item.value && (
                <Text className="text-white text-sm">({item.value})</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomFilters;
