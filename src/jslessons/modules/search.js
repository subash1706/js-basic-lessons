import { list1, list2, list3, list4, list5, list6, list7, list8, list9, list10 } from "./application.js";
var n1 = 1;
export function search() {
	var search = document.getElementById('search').value;
	for (var i=0; i< list2.length; i++){
		if (search===list2[i]){
			var store = i;
		}
    }
	
	var AddRown = document.getElementById('show1');
	var NewRow = AddRown.insertRow(n1);

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


	cel1.innerHTML = list1[store];
	cel2.innerHTML = list2[store];
	cel3.innerHTML = list3[store];
	cel4.innerHTML = list4[store];
	cel5.innerHTML = list5[store];
	cel6.innerHTML = list6[store];
	cel7.innerHTML = list7[store];
	cel8.innerHTML = list8[store];
	cel9.innerHTML = list9[store];
	cel10.innerHTML = list10[store];
	n1++;

}
