export type FoodType = {
    name: string;
    category: string;
    description: string;
    price: number;
    image: string;
    _id: string;
    quantity: number;
}

export type UserType = {
    username?: string;
    email?: string;
    password: string;
}
  