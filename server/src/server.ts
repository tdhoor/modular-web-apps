import express from 'express';
import bodyParser from 'body-parser';
import { ProductService } from './service/product.service';
import { ShoppingCartService } from './service/shoppingcart.service';
//
// import mariadb from 'mariadb';

// const pool = mariadb.createPool({
//   host: 'localhost',
//   user:'tdhoor',
//   connectionLimit: 5,
//   port: 3306,
//   database: 'ba2'
// });
//
//
// async function asyncFunction() {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query("SELECT * FROM test");
//     console.log(JSON.stringify(rows), rows); //[ {val: 1}, meta: ... ]
//     const inJson = rows.json();
//     console.log(inJson.title, inJson.id);
//     console.log('normal: ', rows.id, rows.title);
//     console.log("db connection test success!")
//   } catch (err) {
//     throw err;
//   } finally {
//     if (conn) return conn.end();
//   }
// }
// const b = asyncFunction().then(result => {
//   console.log(result);
// });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

  //console.log(`route: ${req.url}, method: ${req.method}, params: ${JSON.stringify(req.params)}`);

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

const pService = new ProductService();
const sService = new ShoppingCartService();

const PORT = 9898;
const TIMOUT_TIME = 0;

const ROUTES = {
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
  },
  IMAGE: {
    GET_ONE: '/image/:id'
  }
}

/**
 * For testing a delay
 * @param time
 */
const timeout = async (time: number) => {
  const wait = new Promise((resolve) => {
    setTimeout(async () => {
      resolve(true);
    }, time);
  });
  return await wait;
};

/**
 * PRODUCT
 */
 app.get(ROUTES.PRODUCT.GET_ONE, function (req: any, res: any) {
    res.send(pService.getByIndex(req.params.id));
});

app.get(ROUTES.PRODUCT.GET_CATEGORY, function (req: any, res: any) {
    res.send(pService.getByCategory(req.params.id));
});

app.get(ROUTES.PRODUCT.GET_ALL, function (req: any, res: any) {
    res.send(pService.getAll());
});


/**
 * SHOPPINGCART
 */
app.get(ROUTES.SHOPPINGCART.GET_ONE, function (req: any, res: any) {
    res.send(sService.getByIndex(req.params.id));
});

app.get(ROUTES.SHOPPINGCART.GET_ALL, function (req: any, res: any) {
    res.send(sService.getAll());
});

app.post(ROUTES.SHOPPINGCART.POST, (req: any, res: any) => {
    console.error(JSON.stringify(req.body))
    sService.add(req.body);
    res.send(true);
});

app.delete(ROUTES.SHOPPINGCART.DELETE, (req: any, res: any) => {
    sService.delete(req.params.id);
    res.send(true);
});

app.put(ROUTES.SHOPPINGCART.PUT, (req: any, res: any) => {
    sService.update(req.body);
    res.send(true);
});


/**
 * Configs
 */

app.get(ROUTES.CONFIGS.GET_ONE, function (req: any, res: any) {
    res.sendFile(__dirname + '/public/proto.js');
});

/**
 * Image
 */
app.get(ROUTES.IMAGE.GET_ONE, function (req: any, res: any) {
  res.sendFile(__dirname + "/public/img.jpg");
});

/**
 * RUN SERVER
 */

// app.listen(PORT, "192.168.1.4",() => {
// //   console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// // });
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
