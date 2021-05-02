import { Product } from "../model/product.interface";

const description = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`;


export class ProductService {
  products: Product[];

  constructor() {
    this.products = [];
    this.generateProducts(20);
  }

  getAll() {
    return this.products;
  }

  getByIndex(index: number) {
    return this.products[index];
  }

  getByCategory(category: number){
    return this.products.filter(product => product.category === Number(category));
  }

  add(item: Product) {
    this.products.push(item);
  }

  generateProducts(amount: number) {
    for (let i = 0; i < amount; i++) {
      const rndPrice = Math.floor(Math.random() * 10) + 1;

      this.products.push({
        id: i,
        name: "Product " + i,
        price: rndPrice,
        description: description,
        imgUrl: "http://localhost:9898/image/" + i,
        category: i % 6,
        });
    }
  }
}