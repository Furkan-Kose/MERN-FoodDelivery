// data.ts

// Kategoriler
export interface Category {
    id: number;
    name: string;
    image?: string;
  }
  
  export const categories: Category[] = [
    {
      id: 0,
      name: 'Tüm Yemekler',
    },
    {
      id: 1,
      name: 'Burger',
      image: 'https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png',
    },
    {
      id: 2,
      name: 'Pizza',
      image: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg',
    },
    {
      id: 3,
      name: 'Tatlı',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF8QFSaPVmHqmu7jFDRPK17IQb5cRmIGWrg&usqp=CAU',
    },
  ];
  
  // Yemekler
  export interface Food {
    id: number;
    category: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export const foods: Food[] = [
    {
      id: 1,
      category: 'Burger',
      name: 'Hamburger',
      price: 10.99,
      description: 'Lezzetli bir hamburger.',
      image: 'https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900',
    },
    {
      id: 2,
      category: 'Burger',
      name: 'Cheeseburger',
      price: 11.99,
      description: 'Süper lezzetli bir cheeseburger.',
      image: 'https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900',
    },
    {
      id: 3,
      category: 'Burger',
      name: 'Vegan Burger',
      price: 12.99,
      description: 'Sağlıklı ve lezzetli bir vegan burger.',
      image: 'https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900',
    },
    {
      id: 4,
      category: 'Pizza',
      name: 'Margarita Pizza',
      price: 14.99,
      description: 'Klasik bir margarita pizza.',
      image: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg',
    },
    {
      id: 5,
      category: 'Pizza',
      name: 'Pepperoni Pizza',
      price: 15.99,
      description: 'Bol pepperoni ile lezzetli bir pizza.',
      image: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg',
    },
    {
      id: 6,
      category: 'Pizza',
      name: 'Veggie Pizza',
      price: 13.99,
      description: 'Taze sebzelerle yapılan bir pizza.',
      image: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg',
    },
    {
      id: 7,
      category: 'Tatlı',
      name: 'Çikolatalı Pasta',
      price: 9.99,
      description: 'Çikolata severler için harika bir pasta.',
      image: 'https://thumbs.dreamstime.com/b/slice-cheesecake-blackberry-syrup-mint-leaf-cutout-png-transparent-background-slice-cheesecake-blackberry-276141911.jpg',
    },
    {
      id: 8,
      category: 'Tatlı',
      name: 'Meyveli Tiramisu',
      price: 8.99,
      description: 'Meyve sevenler için lezzetli bir tiramisu.',
      image: 'https://thumbs.dreamstime.com/b/slice-cheesecake-blackberry-syrup-mint-leaf-cutout-png-transparent-background-slice-cheesecake-blackberry-276141911.jpg',
    },
    {
      id: 9,
      category: 'Tatlı',
      name: 'Cheesecake',
      price: 10.49,
      description: 'Kremalı ve lezzetli bir cheesecake.',
      image: 'https://thumbs.dreamstime.com/b/slice-cheesecake-blackberry-syrup-mint-leaf-cutout-png-transparent-background-slice-cheesecake-blackberry-276141911.jpg',
    },
  ];

  
  