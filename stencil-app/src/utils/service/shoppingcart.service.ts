import { NetworkService, SERVER_URL } from "./network.service"


export const SHOPPINGCART_URL = SERVER_URL + '/shoppingcart';

export class ShoppingCartService {
    private static instance: ShoppingCartService;

    private constructor(){}
  
    public static getInstance(): ShoppingCartService {
        if (!ShoppingCartService.instance) {
            ShoppingCartService.instance = new ShoppingCartService();
        }

        return ShoppingCartService.instance;
    }

    async get(id?) {
        return NetworkService.getInstance().get(SHOPPINGCART_URL, id)
    }
    
    async post(item) {
        return NetworkService.getInstance().post(SHOPPINGCART_URL, item)
    }
    
    async delete(id) {
        return NetworkService.getInstance().delete(SHOPPINGCART_URL, id)
    }
    
    async put(item) {
        return NetworkService.getInstance().put(SHOPPINGCART_URL, item)
    }
  }