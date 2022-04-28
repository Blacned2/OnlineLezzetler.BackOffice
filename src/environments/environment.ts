// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  countryUrl: 'https://localhost:44310/api/Country/',
  regionUrl: 'https://localhost:44310/api/Region/GetByCountryID?id=',
  cityUrl: 'https://localhost:44310/api/City/GetCityListByRegionID?id=',
  cityPostUrl:'https://localhost:44310/api/City/',
  categoryUrl: 'https://localhost:44310/api/Category/',
  regionPostUrl: 'https://localhost:44310/api/Region/',
  supplierGetUrl: 'https://localhost:44310/api/Supplier/ByCityID?id=',
  supplierUrl: 'https://localhost:44310/api/Supplier/',
  employeeUrl:'https://localhost:44310/api/Employee/', 
  shipperUrl:'https://localhost:44310/api/Shipper/',
  productUrl:'',
  productPostUrl:'',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
