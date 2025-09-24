export interface EventProps {
  id?: string;
  title: string;
  artist: string;
  date: string;
  location: string;
}
export interface OrderProps {
  category: string;
  quantity: number;
  price: number;
  order: string;
}
export interface TicketPurchaseProps {
  id?: string;
  category: string;
  price: number;
  remainingTickets: number;
}
export interface EventTicketProps {
  id?: string;
  artist: string;
  ticketType: string;
  price: number;
  ticketCount: number;
  image?: string;
}

export interface NotificationProps {
  id?: string;
  title: string;
  description: string;
  time: string;
}

export interface NotificationGroup {
  today: NotificationProps[];
  yesterday: NotificationProps[];
}

export interface foodItemProps {
  id?:number;
  image?: string;
  name: string;
  description: string;
  rating: number;
}

export const events: EventProps[] = [
  {
    id: "1",
    title: "Baba Xperience",
    artist: "Platin",
    date: "30-May-2025",
    location: "Serena Hotel Kigali",
  },
  {
    id: "2",
    title: "Baba Xperience",
    artist: "Platin",
    date: "30-May-2025",
    location: "Serena Hotel Kigali",
  },
];

export const orders: OrderProps[] = [
  {
    category: "Soft Drinks",
    quantity: 1,
    price: 10000,
    order: "juice and Fries",
  },
  {
    category: "Soft Drinks",
    quantity: 1,
    price: 10000,
    order: "juice and Fries",
  },
  {
    category: "Soft Drinks",
    quantity: 1,
    price: 10000,
    order: "juice and Fries",
  },
];

export const tickets: TicketPurchaseProps[] = [
  {
    id: "1",
    category: "VIP",
    price: 10000,
    remainingTickets: 100,
  },
  {
    id: "2",
    category: "Regular",
    price: 5000,
    remainingTickets: 100,
  },
  {
    id: "3",
    category: "VIP",
    price: 10000,
    remainingTickets: 100,
  },
  {
    id: "4",
    category: "Regular",
    price: 10000,
    remainingTickets: 5000,
  },
];

export const eventTickets: EventTicketProps[] = [
  {
    id: "1",
    artist: "Platin",
    ticketType: "Wwp",
    price: 10000,
    ticketCount: 2,
  },
  {
    id: "2",
    artist: "Platin",
    ticketType: "Wwp",
    price: 10000,
    ticketCount: 2,
  },
  {
    id: "3",
    artist: "Platin",
    ticketType: "Wwp",
    price: 10000,
    ticketCount: 2,
  },
  {
    id: "4",
    artist: "Platin",
    ticketType: "Wwp",
    price: 10000,
    ticketCount: 2,
  },
  {
    id: "5",
    artist: "Platin",
    ticketType: "Wwp",
    price: 10000,
    ticketCount: 2,
  },
  {
    id: "6",
    artist: "Platin",
    ticketType: "Wwp",
    price: 10000,
    ticketCount: 2,
  },
];

export const notifications: NotificationGroup = {
  today: [
    {
      id: "1",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
    {
      id: "2",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
  ],
  yesterday: [
    {
      id: "3",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
    {
      id: "4",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
    {
      id: "5",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
    {
      id: "6",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
    {
      id: "7",
      title: "Successfully Order",
      description: "Your order has been successfully made",
      time: "10:00 AM",
    },
  ],
};

export const foods: foodItemProps[] = [
  {
  id: 1,
  name: "Burger",
  description: "A juicy beef burger stacked with melted cheddar cheese, fresh lettuce, ripe tomatoes, and a soft toasted bun, served with optional sauces for a hearty and filling meal.",
  rating: 4.5,
  image: "https://images.unsplash.com/photo-1606755962773-0f4b6efc41df?q=80&w=800&auto=format&fit=crop"
},
{
  id: 2,
  name: "Pizza",
  description: "A classic pepperoni pizza baked with a crispy golden crust, rich tomato sauce, gooey mozzarella cheese, and generous slices of spicy pepperoni, perfect for sharing.",
  rating: 4.0,
  image: "https://images.unsplash.com/photo-1601924582971-d3f24a5b1b1c?q=80&w=800&auto=format&fit=crop"
},
{
  id: 3,
  name: "Pasta",
  description: "A comforting plate of spaghetti tossed in savory tomato sauce, seasoned with garlic and herbs, topped with fresh parsley and a sprinkle of parmesan cheese.",
  rating: 4.2,
  image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop"
},
{
  id: 4,
  name: "Salad",
  description: "A refreshing Caesar salad featuring crisp romaine lettuce, grilled chicken slices, crunchy croutons, and a creamy Caesar dressing, topped with parmesan shavings.",
  rating: 4.3,
  image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?q=80&w=800&auto=format&fit=crop"
},
{
  id: 5,
  name: "Fries",
  description: "Golden and crispy French fries seasoned with a touch of salt, served with tangy ketchup on the side for the perfect snack or side dish.",
  rating: 4.1,
  image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop"
},
{
  id: 6,
  name: "Soda",
  description: "A chilled glass of classic Coca-Cola, fizzy and refreshing with its signature sweet and bold flavor, ideal for pairing with meals or enjoyed on its own.",
  rating: 4.0,
  image: "https://images.unsplash.com/photo-1613478229180-4d2b72e8d8d3?q=80&w=800&auto=format&fit=crop"
},
{
  id: 7,
  name: "Juice",
  description: "A freshly squeezed orange juice, naturally sweet and rich in vitamin C, served chilled for a refreshing and healthy beverage option.",
  rating: 4.4,
  image: "https://images.unsplash.com/photo-1577801599712-58e0526f3d4f?q=80&w=800&auto=format&fit=crop"
}

]

;
