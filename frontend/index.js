import { reload } from "./lib/utils.js";
import { Student } from "./components/Student.js";
const main = document.querySelector('.place')
const form = document.forms.namedItem('add_new')
const base = 'http://localhost:8080'
form.onsubmit = (e) => {
    e.preventDefault();
    
    let student = {
        name: new FormData(form).get('name'),
        age: new FormData(form).get('age'), 
    }
    fetch(base+'/todos', {
        method: "POST",
        body: JSON.stringify(student)
    })
    .then(res => console.log(res))
}

fetch(base+'/todos')
    .then(res => res.json())
    .then(res => reload(res, main, Student))
