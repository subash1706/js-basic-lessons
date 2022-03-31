import { list1, list2, list3, list4, list5, list6, list7, list8, list9, list10 } from "./application.js";
import { getRadioValue, getRadioValue1 } from "./radiodata.js";
var n = 1;
var x = 0;
export function AddRow(){
	var AddRown = document.getElementById('show');
	var NewRow = AddRown.insertRow(n);
}
    list1[x] = document.getElementById("name").value;
	list2[x] = document.getElementById("Aadhar").value;
	list3[x] = document.getElementById("Dob").value;
	list4[x] = document.getElementById("City").value;
	list5[x] = document.getElementById("dot").value;
	list6[x] = document.getElementById("tot").value;
	list7[x] = getRadioValue("result");
	list8[x] =  document.getElementById("lname").value;
	list9[x] = document.getElementById("rep.no").value;
	list10[x] = getRadioValue1("gender");

	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	var cel4 = NewRow.insertCell(3);
	var cel5 = NewRow.insertCell(4);
	var cel6 = NewRow.insertCell(5);
	var cel7 = NewRow.insertCell(6);
	var cel8 = NewRow.insertCell(7);
	var cel9 = NewRow.insertCell(8);
	var cel10 = NewRow.insertCell(9);


	cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];
	cel4.innerHTML = list4[x];
	cel5.innerHTML = list5[x];
	cel6.innerHTML = list6[x];
	cel7.innerHTML = list7[x];
	cel8.innerHTML = list8[x];
	cel9.innerHTML = list9[x];
	cel10.innerHTML = list10[x];


	n++;
	x++;
