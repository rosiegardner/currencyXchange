import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import CurrencyXChange from './currencyX-service.js';

function clearFields() {
  $('.showErrors').text(""); 
  $('.showCurrencyOutput').text("");
}

function getElements(response, dollarInput, currency) {
  let rateConversion = (response.conversion_rates[`${currency}`]);
  if (typeof rateConversion === "number") {
    $('.showCurrencyOutput').append(`Your Currency XChange rate is ${rateConversion}  $${dollarInput} USD is worth ${dollarInput*rateConversion} ${currency}`);
  } else if (rateConversion === undefined){
    $('.showErrors').text(`No data for ${currency}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);   
  }   
}

$(document).ready(function() {
  $('#showXChange').click(function() {
    let dollarInput = $('#dollarAmount').val();
    let currency = $('#xchangeCurrency').val();
    clearFields();
    CurrencyXChange.currencyRate()
      .then(function(response) {
        getElements(response, dollarInput, currency);
      });
  });
});