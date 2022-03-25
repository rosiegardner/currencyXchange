import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import CurrencyXChange from './currencyX-service.js'

console.log($)

function clearFields() {
  $('.showErrors').text(""); 
  $('.showCurrencyOutput').text("");
}

function getElements(response) {
  console.log(response)
  if(response) {
    $('.showCurrencyOutput').append(`Your Currency XChange rate is ${response.conversion_rates}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

// function getElements(response) {
//   for (let i=0; i< response; i++) {
//     if(response[i]) {
      
//       $('.showCountry').append(`The Crypto ${response[i].name} - ${response[i].currency} holds the current value of ${response[i].price * amountEntered}`);
//       $('.showCountry').append('<br></br>');
//       $('.showXchange').append(`The amount entered is equal to ${response[i]["1d"].price_change_pct * amountEntered} in ${response[i].name}`);
//       $('.showXchange').append('<br></br>');
//     } else {
//       $('.showErrors').text(`There was an error: ${response.message}`);
//     }
//   }
// }

$(document).ready(function() {
  $('#showXChange').click(function() {
    let currency = $('#showCurrencyOutput').val();
    console.log(currency);
    clearFields();
    CurrencyXChange.currencyRate()
    .then(function(response) {
      getElements(response);
    });
  });
});

// $(document).ready(function() {
//   $('#countryCurrency').click(function() {
//     let country = $('#showCountry').val;
//     let xChange = $('#showXchange');
//     clearFields();
//     CurrencyXchange.xchangeCurrency(country)
//     .then(function(response) {
//       console.log(response)
//       getElements(response);
//     });
//   });
// });