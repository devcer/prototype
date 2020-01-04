// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1Ijoidmlzd2FuYXRoYW1zYW50b3NoIiwiYSI6ImNrMGt4dHBlNTBrOWYzbnRrNXBodzhnZ2gifQ.6n2HTrCLjfNahR0sY8GGVg'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyALx7gGAG78PyFq9tD13-LH9OAjQs6KEsg',
    authDomain: 'prototype-55d8a.firebaseapp.com',
    databaseURL: 'https://prototype-55d8a.firebaseio.com',
    projectId: 'prototype-55d8a',
    storageBucket: '',
    messagingSenderId: '694115499754',
    appId: '1:694115499754:web:73fd2b75cb7e75d23be193'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
