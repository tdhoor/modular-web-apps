"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var product_service_1 = require("./service/product.service");
var shoppingcart_service_1 = require("./service/shoppingcart.service");
var mariadb_1 = __importDefault(require("mariadb"));
var pool = mariadb_1.default.createPool({
    host: 'localhost',
    user: 'tdhoor',
    connectionLimit: 5,
    port: 3306,
    database: 'ba2'
});
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function () {
        var conn, rows, inJson, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, pool.getConnection()];
                case 1:
                    conn = _a.sent();
                    return [4 /*yield*/, conn.query("SELECT * FROM test")];
                case 2:
                    rows = _a.sent();
                    console.log(JSON.stringify(rows), rows); //[ {val: 1}, meta: ... ]
                    inJson = rows.json();
                    console.log(inJson.title, inJson.id);
                    console.log('normal: ', rows.id, rows.title);
                    console.log("db connection test success!");
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    throw err_1;
                case 4:
                    if (conn)
                        return [2 /*return*/, conn.end()];
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var b = asyncFunction().then(function (result) {
    console.log(result);
});
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Add headers
app.use(function (req, res, next) {
    console.log("route: " + req.url + ", method: " + req.method + ", params: " + JSON.stringify(req.params));
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
var pService = new product_service_1.ProductService();
var sService = new shoppingcart_service_1.ShoppingCartService();
var PORT = 9898;
var TIMOUT_TIME = 0;
var ROUTES = {
    PRODUCT: {
        GET_ONE: '/product/:id',
        GET_CATEGORY: '/product/category/:id',
        GET_ALL: '/product',
        POST: '/product',
        PUT: '/product',
        DELETE: '/product/:id'
    },
    SHOPPINGCART: {
        GET_ONE: '/shoppingcart/:id',
        GET_ALL: '/shoppingcart',
        POST: '/shoppingcart',
        PUT: '/shoppingcart',
        DELETE: '/shoppingcart/:id'
    },
    CONFIGS: {
        GET_ONE: '/config/:id',
    }
};
var timeout = function (time) { return __awaiter(void 0, void 0, void 0, function () {
    var wait;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                wait = new Promise(function (resolve) {
                    setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            resolve(true);
                            return [2 /*return*/];
                        });
                    }); }, time);
                });
                return [4 /*yield*/, wait];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
/**
 * PRODUCT
 */
app.get(ROUTES.PRODUCT.GET_ONE, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        res.send(pService.getByIndex(req.params.id));
    });
});
app.get(ROUTES.PRODUCT.GET_CATEGORY, function (req, res) {
    console.log('get by category', req.params.id, pService.getByCategory(req.params.id));
    timeout(TIMOUT_TIME).then(function (param) {
        res.send(pService.getByCategory(req.params.id));
    });
});
app.get(ROUTES.PRODUCT.GET_ALL, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        res.send(pService.getAll());
    });
});
/**
 * SHOPPINGCART
 */
app.get(ROUTES.SHOPPINGCART.GET_ONE, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        res.send(sService.getByIndex(req.params.id));
    });
});
app.get(ROUTES.SHOPPINGCART.GET_ALL, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        res.send(sService.getAll());
    });
});
app.post(ROUTES.SHOPPINGCART.POST, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        sService.add(req.body);
        res.send(true);
    });
});
app.delete(ROUTES.SHOPPINGCART.DELETE, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        sService.delete(req.params.id);
        res.send(true);
    });
});
app.put(ROUTES.SHOPPINGCART.PUT, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        sService.update(req.body);
        res.send(true);
    });
});
/**
 * Configs
 */
app.get(ROUTES.CONFIGS.GET_ONE, function (req, res) {
    timeout(TIMOUT_TIME).then(function (param) {
        res.sendFile(__dirname + '/public/proto.js');
    });
});
/**
 * RUN SERVER
 */
app.listen(PORT, "192.168.1.4", function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:" + PORT);
});
