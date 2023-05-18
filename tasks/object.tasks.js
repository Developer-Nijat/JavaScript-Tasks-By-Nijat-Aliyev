// Object Task 1

// By making use of the Object entries method, show the properties whose type is number in the console

// const obj = {
//     a1: "test",
//     b1: 4,
//     c1: "hello",
//     d1: 6,
//     e1: "welcome"
//   }

// ==================================================================

// Object Task 2

// Combine the given objects

// const myObject1 = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const myObject2 = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow'
// }

// ====================================================================

// Object Task 3

// Finding the country object where countryCode is 994

// const demoData = {
//   data: [
//     {
//       period: "Month",
//       subRows: [
//         {
//           country: "Albania",
//           measures: {
//             countryCode: "67",
//           },
//         },
//         {
//           country: "Azerbaijan",
//           measures: {
//             countryCode: "994",
//           },
//         },
//       ],
//     },
//   ],
// };

// ====================================================================

// Object Task 4

// Add driverName property to car details object not car object. Example: => [driverName: "Tomas"]

//  const car = {
//     model:"BMW",
//     details: {
//        year: 2015
//     }
//  };

// ====================================================================

// Object Task 5

//  Remove year property from car object

//  const car = {
//     type:"Fiat",
//     model:"500",
//     color:"white",
//     details: {
//        year: 2015
//     }
//  };

// ====================================================================

// Object Task 6

//  Optimize hardcoded parseJsonToCallLogModel method

// const parseJsonToCallLogModel = (params) => {
//   let callLogModel = {};

//   if (params.lang === '1') callLogModel.lang = 'az';
//   if (params.lang === '2') callLogModel.lang = 'ru';
//   if (params.lang === '3') callLogModel.lang = 'en';

//   if (params.mobileNumber && params.mobileNumber.startsWith('+994')) {
//     params.mobileNumber = params.mobileNumber.replace('+994', '0')
//   }
//   if (params.mobileNumber && params.mobileNumber.startsWith('994')) {
//     params.mobileNumber = params.mobileNumber.replace('994', '0')
//   }

//   callLogModel.customerId = params.customerId;
//   callLogModel.customerType = params.customerType;
//   callLogModel.tin = params.tin;
//   callLogModel.pan = params.pan;
//   callLogModel.mobileNumber = params.mobileNumber;
//   callLogModel.action = params.action;

//   return callLogModel;
// };
