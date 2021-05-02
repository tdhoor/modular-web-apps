import { Product } from "../model/product.interface";
import { NetworkService, SERVER_URL } from "./network.service"


export const PRODUCT_URL = SERVER_URL + '/product';


export class ProductService {
    private static instance: ProductService;

    private constructor(){}
  
    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }

        return ProductService.instance;
    }
  
    async get(id?: number) {
      return NetworkService.getInstance().get(PRODUCT_URL, id)
    }
    
    async getByCategory(category?: number){
      return NetworkService.getInstance().get(PRODUCT_URL + '/category', category)
    }
    
    async post(item: Product) {
      return NetworkService.getInstance().post(PRODUCT_URL, item)
    }
  }