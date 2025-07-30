import { EventProps } from "@/data";
import { create } from "zustand";



type EventStore = {
  selectedEvent: EventProps | null;
  setSelectedEvent: (event: EventProps) => void;
  clearSelectedEvent: () => void;
};

export const useEventStore = create<EventStore>((set) => ({
  selectedEvent: null,
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  clearSelectedEvent: () => set({ selectedEvent: null }),
}));

