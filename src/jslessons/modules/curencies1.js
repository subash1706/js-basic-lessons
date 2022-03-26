//List of currencies
const currencies = {
    MSG: 'Select a Currency',
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
  };
  //Elements
  const from = document.getElementById('currency1');
  const to = document.getElementById('currency2');
  from.innerHTML = getOptions(currencies);
 to.innerHTML = getOptions(currencies);
  //Handlers
  function getOptions(data) {
    return Object.entries(data)
  
      .map(
        ([country, currency]) =>
          `<option value="${country}">${
            country == 'MSG' ? ' ' : country
          }  ${currency}</option>`
      )
      .join('');
  }  
  document.getElementById('amount').addEventListener('change', myFunction);
  //Conversion
  function myFunction() {
    var currency = document.getElementById('amount');
    var output = Math.random(currency);
    document.getElementById('result').innerHTML = output;
  }
  