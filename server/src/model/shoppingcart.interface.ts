import { Product } from "./product.interface";

export interface ShoppingCartItem {
    id: number;
    item: Product;
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    amount: number
}
  