import { defineStore } from "pinia";

export const useClientStore = defineStore("clients", {
  // Define your store properties, state, and actions
  state: () => {
    return {
      clientData: [
        {
          id: 1,
          address: "Shahrisabz",
          fullname: "Shakhboz Pulatov",
          phone: "+998903147756",
          birth: "23/07/2002",
        },
        {
          id: 2,
          address: "Toshkent",
          fullname: "Doston Pulatov",
          phone: "+998903147756",
          birth: "12/07/2000",
        },
        {
          id: 3,
          address: "Fargona",
          fullname: "Aziz Haydarov",
          phone: "+998903147756",
          birth: "12/07/2000",
        },
      ],
      products: [
        {
          product: "KitKat",
          price: 5000,
        },
        {
          product: "Mars",
          price: 6000,
        },
        {
          product: "Snikers",
          price: 7000,
        },
      ],
      orders: [
        {
          id: 1,
          product: ["KitKat", "Mars"],
          customer_name: "Shakhboz Pulatov",
          order_price: 11000,
          order_date: "23/07/2002",
        },
        {
          id: 2,
          product: ["Mars", "Snikers"],
          customer_name: "Shakhboz Pulatov",
          order_price: 13000,
          order_date: "23/07/2002",
        },
        {
          id: 3,
          product: ["Kitkat", "Snikers"],
          customer_name: "Shakhboz Pulatov",
          order_price: 12000,
          order_date: "23/07/2002",
        },
      ],
    };
  },
});
