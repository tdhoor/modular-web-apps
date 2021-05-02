"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartService = void 0;
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.shoppingList = [];
    }
    ShoppingCartService.prototype.getAll = function () {
        return this.shoppingList;
    };
    ShoppingCartService.prototype.getByIndex = function (index) {
        return this.shoppingList[index];
    };
    ShoppingCartService.prototype.add = function (item) {
        this.shoppingList.push(item);
    };
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
