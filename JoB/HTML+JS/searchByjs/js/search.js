function search(){
	let searchName = document.getElementById("searchName").value;
	let searchYear = parseInt(document.getElementById("searchYear").value);
	// set url to search from input
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let name ; // get value from param 'name'
let year ; // get value from param 'year'



function loadDoc(){
	// search student by name and year param and set hyperlink to info of student
	
	
}
