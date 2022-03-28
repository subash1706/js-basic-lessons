import { currencies } from "./curencies1.js";
import { getOptions } from "./handlers1.js";
import { myFunction } from "./money.js";
  const from = document.getElementById('currency1');
  const to = document.getElementById('currency2');
  from.innerHTML = getOptions(currencies);
 to.innerHTML = getOptions(currencies);
 document.getElementById('amount').addEventListener('change', myFunction);