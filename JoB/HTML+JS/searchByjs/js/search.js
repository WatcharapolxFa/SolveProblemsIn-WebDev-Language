const allStudents = [
    { 
        "id": 1, 
        "name": "aisikawadee", 
        "year": 2003, 
        "user": "aisikawadeerat", 
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

function filterText(name, year) {
    if (/[1-9]/.test(name)) return
    let studentFiltered = []
    allStudents.forEach(val => {
        if (val.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 && year === val.year) {
            studentFiltered.push(val)
        }
    })
    return studentFiltered;
}

function onLiClick(id) {
    window.location.href = `info.html?id=${id}`
}

function search(){
    console.log(allStudents)
	let searchName = document.getElementById("searchName").value;
	let searchYear = parseInt(document.getElementById("searchYear").value);
	let studentList = document.getElementById("studentList")
    let studentFiltered = filterText(searchName, searchYear)
    studentFiltered.forEach(val => {
        let node = document.createElement("li");
        let textnode = document.createTextNode(`Name: ${val.name} Year: ${val.year}`);
        let liButton = document.createElement("button")
        liButton.innerHTML = "view profile"
        liButton.name = val.name + "Button"
        liButton.onclick = () => {
            onLiClick(val.id);
        }
        node.appendChild(textnode);
        node.appendChild(liButton);
        studentList.appendChild(node);
    })
}