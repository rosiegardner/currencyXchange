export default class CurrencyXChange {
  static async currencyRate() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}












//   export default class CurrencyXchange {
//     static async xchangeCurrency(country, ) {
//       console.log(country)
//       try {
//         const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
//       if (!response.ok) {
//         throw Error (response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }