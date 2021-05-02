import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  namespace: 'stencil-shop',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    }
  ],

};


// import { Config } from '@stencil/core';

// // https://stenciljs.com/docs/config

// export const config: Config = {
//   globalStyle: 'src/global/app.css',
//   globalScript: 'src/global/app.ts',
//   taskQueue: 'async',
//   namespace: 'stencil-app',

//   outputTargets: [
//     {
//       type: 'www',
//       // comment the following line to disable service workers in production
//       serviceWorker: null
//     },
//     {
//       type: 'dist',
//       esmLoaderPath: '../loader'
//     }
//   ],
// };
