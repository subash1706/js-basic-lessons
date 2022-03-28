export function myFunction() {
    var currency = document.getElementById('amount');
    var output = Math.random(currency);
    document.getElementById('result').innerHTML = output;
  }