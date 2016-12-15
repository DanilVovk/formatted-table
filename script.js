var tableBody = document.getElementById('UFL-table').children[1];

function changeColor() {
	
}

function sayHi() {
	alert('Hi!');
}

for (var i = 0; i < tableBody.length; i++) {
	  tableBody.children[i].style.backgroundColor='red';
	}