import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


const options = ['Recent', 'Popular', 'Trending'];

interface DropDownProps{
  options:string[];
  selected:string;
  setSelected:React.Dispatch<React.SetStateAction<string>>;
}

export default function DropDown({options,selected,setSelected}:DropDownProps) {
  const [open, setOpen] = useState(false);



  return (
    <View className="relative z-10 w-24">
    
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        className="bg-[#1c1c1c] flex-row items-center px-3 py-2 rounded-lg"
      >
        <Text className="text-white text-sm flex-1">{selected}</Text>
        <AntDesign name="caretdown" size={12} color="white" />
      </TouchableOpacity>

      {open && (
        <View className="absolute top-10  w-full bg-[#1c1c1c] rounded-lg shadow-lg">
          {options.map(option => (
            <Pressable
              key={option}
              onPress={() => setSelected(option)}
              className="px-3 py-2 "
            >
              <Text className="text-white text-sm">{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
