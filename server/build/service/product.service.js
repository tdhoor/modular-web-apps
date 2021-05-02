"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
var imgUrls = [
    'https://unsplash.com/photos/dah-jZWgzx8/download?force=true&w=640',
    'https://unsplash.com/photos/zuvACqYcS8Y/download?force=true&w=640',
    'https://unsplash.com/photos/yl5mP6gcPoc/download?force=true&w=640',
    'https://unsplash.com/photos/qhEeGg3IyRk/download?force=true&w=640',
    'https://unsplash.com/photos/9YW_W7cjHkg/download?force=true&w=640',
    'https://unsplash.com/photos/90NNkvqBdtE/download?force=true&w=640',
    'https://unsplash.com/photos/l8p1aWZqHvE/download?force=true&w=640',
    'https://unsplash.com/photos/_GNVwZJv-Jo/download?force=true&w=640'
];
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
    ProductService.prototype.getByCategory = function (category) {
        return this.products.filter(function (product) { return product.category === Number(category); });
    };
    ProductService.prototype.add = function (item) {
        this.products.push(item);
    };
    ProductService.prototype.generateProducts = function (amount) {
        for (var i = 0; i < amount; i++) {
            var rndPrice = Math.floor(Math.random() * 10) + 1;
            this.products.push({
                id: i,
                name: "Product " + i,
                price: rndPrice,
                description: description,
                imgUrl: imgUrls[i % imgUrls.length],
                category: i % 6,
            });
        }
    };
    return ProductService;
}());
exports.ProductService = ProductService;
