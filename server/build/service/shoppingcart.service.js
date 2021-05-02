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
        var index = this.shoppingList.findIndex(function (el) { return Number(el.item.id) === Number(item.item.id); });
        if (index >= 0) {
            this.shoppingList[index].amount++;
        }
        else {
            item.id = this.shoppingList.length;
            this.shoppingList.push(item);
        }
        console.log(item);
    };
    ShoppingCartService.prototype.update = function (item) {
        var index = this.shoppingList.findIndex(function (el) { return Number(el.id) === Number(item.id); });
        this.shoppingList[index] = item;
    };
    ShoppingCartService.prototype.delete = function (id) {
        var index = this.shoppingList.findIndex(function (el) { return Number(el.id) === Number(id); });
        this.shoppingList.splice(index, 1);
    };
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
