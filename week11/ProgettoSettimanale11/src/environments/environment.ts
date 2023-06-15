// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //in questo file (environment.ts) abbiamo le varibili d'ambiente, ovvero quelle che possiamo utilizzare da diverse parti dell'applicazione. Quindi per comodità dichiaro qui quella dell'endpoint alla quale farò più volte riferimento. (per convenzione la chiamo baseURL)
  baseURL: 'http://localhost:3000/',
  imageURL: 'https://image.tmdb.org/t/p/w500'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
