import { ShoppingCartItem } from "../model/shoppingcart.interface";

export class ShoppingCartService {
  shoppingList: ShoppingCartItem[];

  constructor() {
    this.shoppingList = [];
  }

  getAll() {
    return this.shoppingList;
  }

  getByIndex(index: number) {
    return this.shoppingList[index];
  }

  add(item: ShoppingCartItem) {
    this.shoppingList.push(item);
  }

  update(item: ShoppingCartItem) {
    const index = this.shoppingList.findIndex(
      (el) => Number(el.id) === Number(item.id)
    );
    this.shoppingList[index] = item;
  }

  delete(id: number) {
    const index = this.shoppingList.findIndex(
      (el) => Number(el.id) === Number(id)
    );
    this.shoppingList.splice(index, 1);
  }
}