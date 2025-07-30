 export interface EventProps{
    id?: string;
    title:string;
    artist:string;
    date:string;
    location:string;
   
}
export interface OrderProps{
    category:string;
    quantity:number;
    price:number;
    order:string;
   
}
export interface TicketPurchaseProps{
    id?:string;
    category:string;
    price:number;
    remainingTickets:number;
   
}
export interface EventTicketProps{
    id?:string;
    artist:string;
    ticketType:string;
    price:number;
    ticketCount:number;
image?:string;
   
}

export const events:EventProps[]=[
    {
        id: "1",
        title:"Baba Xperience",
        artist:"Platin",
        date:"30-May-2025",
        location:"Serena Hotel Kigali"
    },
    {
        id: "2",
        title:"Baba Xperience",
        artist:"Platin",
        date:"30-May-2025",
        location:"Serena Hotel Kigali"
    },

    
    
]

export const orders:OrderProps[]=[
    {
        category:"Soft Drinks",
        quantity:1,
        price:10000,
        order:"juice and Fries"
    },
    {
        category:"Soft Drinks",
        quantity:1,
        price:10000,
        order:"juice and Fries"
    },
    {
        category:"Soft Drinks",
        quantity:1,
        price:10000,
        order:"juice and Fries"
    },
 
]

export const tickets:TicketPurchaseProps[]=[
    {
        id:"1",
        category:"VIP",
        price:10000,
        remainingTickets:100
    },
    {
        id:"2",
        category:"Regular",
        price:5000,
        remainingTickets:100
    },
    {
        id:"3",
        category:"VIP",
        price:10000,
        remainingTickets:100
    },
    {
        id:"4",
        category:"Regular",
        price:10000,
        remainingTickets:5000
    },
   
    
]

export const eventTickets:EventTicketProps[]=[
    {
        id:"1",
        artist:"Platin",
        ticketType:"Wwp",
        price:10000,
        ticketCount:2
    },
    {
        id:"2",
        artist:"Platin",
        ticketType:"Wwp",
        price:10000,
        ticketCount:2
    },
    {
        id:"3",
        artist:"Platin",
        ticketType:"Wwp",
        price:10000,
        ticketCount:2
    },
    {
        id:"4",
        artist:"Platin",
        ticketType:"Wwp",
        price:10000,
        ticketCount:2
    },
    {
        id:"5",
        artist:"Platin",
        ticketType:"Wwp",
        price:10000,
        ticketCount:2
    },
    {
        id:"6",
        artist:"Platin",
        ticketType:"Wwp",
        price:10000,
        ticketCount:2
    },
   
    
]