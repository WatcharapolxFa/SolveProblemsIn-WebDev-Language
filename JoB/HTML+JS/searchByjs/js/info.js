const allStudents = [
    { 
        "id": 1, 
        "name": "aisikawadee", 
        "year": 2003, 
        "user": "AisikawadeeRat", 
        "grade": "3.11", 
        "quote": "earth without art is eh"  
    },
    { 
        "id": 2, 
        "name": "gronwannapairote", 
        "year" : 2002, 
        "user" : "GronProxie",
        "grade" : "3.97", 
        "quote ": "silent mode" 
    }
]

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function loadDoc(){
	// find student by id and show student detail
	
	
}

function filterStudent(id) {
    for (let index = 0; index < allStudents.length; index++) {
        if (allStudents[index].id === id) {
            return allStudents[index]
        }
    }
}

function getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = parseInt(urlParams.get("id"))
    const filteredStudent = filterStudent(id)
    document.getElementById("name").innerHTML += filteredStudent.name
    document.getElementById("year").innerHTML += filteredStudent.year
    document.getElementById("user").innerHTML += filteredStudent.user
    document.getElementById("grade").innerHTML += filteredStudent.grade
    document.getElementById("quote").innerHTML += filteredStudent.quote
}

getParams();