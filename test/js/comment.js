var field = document.querySelector('textarea');
var backup = field.getAttribute('placeholder');
var clear = document.getElementById('clear')

field.onfocus = funtion(){
	this.setAttribute('placeholder', '');
	this.style.borderColor = '#000000';
}

field.onblur = funtion(){
	this.setAttribute('placeholder',backup);
}

clear.onClick = funtion() {
	field.value = '';
}