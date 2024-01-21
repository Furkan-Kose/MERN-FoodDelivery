export type FoodType = {
    name: string;
    category: string;
    description: string;
    price: number;
    image?: string;
    _id: string;
    quantity: number;
}

export type UserType = {
    username?: string;
    email?: string;
    password: string;
    _id: string;
    isAdmin?: boolean;
    image?: string;
}

export type CategoryType = {
    id: number;
    name: string;
    image?: string;
}
  
export type JwtPayload = {
    sub: string; 
    isAdmin: boolean;
    userId: string;
}