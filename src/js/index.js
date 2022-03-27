import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import CurrencyXChange from './currencyX-service.js'

function clearFields() {
  $('.showErrors').text(""); 
  $('.showCurrencyOutput').text("");
}

function getElements(response) {
  let dollarInput = $('#dollarAmount').val();
  let rateConversion = response.conversion_rates;
  if (response) {
    $('.showCurrencyOutput').append(`Your Currency XChange rate is ${dollarInput * rateConversion.CAD}`);
   } else {
    $('.showErrors').text(`There was an error: ${response.message}`);   
  }   
}


    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.EUR}`); 
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.DKK}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.NOK}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.SEK}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.CHF}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.KRW}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.KPW}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.BRL}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.COP}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.CUP}`);
    // $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateObject.MXN}`);

$(document).ready(function() {
  $('#showXChange').click(function() {
    clearFields();
    CurrencyXChange.currencyRate()
    .then(function(response) {
      getElements(response);
    });
  });
});