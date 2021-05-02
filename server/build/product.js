"use strict";
var description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
        this.generateProducts(20);
    }
    ProductService.prototype.getAll = function () {
        return this.products;
    };
    ProductService.prototype.getByIndex = function (index) {
        return this.products[index];
    };
    ProductService.prototype.add = function (item) {
        this.products.push(item);
    };
    ProductService.prototype.generateProducts = function (amount) {
        for (var i = 0; i < amount; i++) {
            var rndPrice = Math.floor(Math.random() * 10);
            var rndWords = Math.floor(Math.random() * 1000);
            this.products.push({
                id: i,
                name: "Product " + i,
                price: rndPrice,
                description: description.slice(0, rndWords),
                imgUrl: "https://images.unsplash.com/photo-1512909006721-3d6018887383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            });
        }
    };
    return ProductService;
}());
