import { reload } from "./lib/utils.js";
import { Student } from "./components/Student.js";
const main = document.querySelector('.place')
const form = document.forms.namedItem('add_new')
const length_num = document.querySelectorAll('tr')
form.onsubmit = (e) => {
    e.preventDefault();
    
    let student = {
        number: length_num.length,
        name: new FormData(form).get('name'),
        age: new FormData(form).get('age'), 
    }
    fetch('http://localhost:8080/todos', {
        method: "POST",
        body: JSON.stringify(student)
    })
    .then(res => console.log(res))
}

fetch('http://localhost:8080/todos')
    .then(res => res.json())
    .then(res => reload(res, main, Student))