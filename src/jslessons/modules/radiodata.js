export function getRadioValue(theRadioGroup) {
	var elements = document.getElementsByName(theRadioGroup);
 	for (var i = 0, l = elements.length; i < l; i++) {
		 if (elements[i].checked) {
			return elements[i].value;
		}
	}
}
export function getRadioValue1(theRadioGroup1){
	var element1 = document.getElementsByName(theRadioGroup1);
	for (var j = 0, l = element1.length; j < l; j++) {
		if (element1[j].checked){
			return element1[j].value;
		}
	}
}	