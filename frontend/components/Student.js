export function Student(item , array){
    const tr_body = document.createElement('tr')
    const no = document.createElement('td')
    const name = document.createElement('td')
    const age = document.createElement('td')
    const action = document.createElement('td')
    const btn_edit = document.createElement('button')
    const btn_remove = document.createElement('button')
    const img_edit = document.createElement('img')
    const img_remove = document.createElement('img')
    const now_year = (new Date()).getFullYear()
    no.classList.add('td')
    name.classList.add('td')
    age.classList.add('td')
    action.classList.add('td')
    btn_edit.classList.add('edit_name')
    btn_remove.classList.add('delete_user')
    img_edit.classList.add('img')
    img_remove.classList.add('img')

    no.innerHTML = item.number + 1
    name.innerHTML = item.name
    age.innerHTML = now_year - item.age
    img_edit.src = 'https://www.svgrepo.com/show/73131/edit-button.svg'
    img_remove.src = 'https://avatars.mds.yandex.net/i?id=be1c0d9e3986ba90c1ab99cf1ae893a5d6842943-3920022-images-thumbs&n=13'

    tr_body.append(no,name,age,action)
    action.append(btn_edit,btn_remove)
    btn_edit.append(img_edit)
    btn_remove.append(img_remove)

    // btn_remove.onclick = () => {
    //     let idx = array.indexOf(item)
    //     fetch('http://localhost:8080/todos',{        
    //         method: "DELETE",
    //     })
    //     .then(res => {
    //         array.splice(idx, 1);
    //         tr_body.remove();
    //     })

    // }

    btn_remove.onclick = () => {
        let idx = array.indexOf(item);
        let studentId = array[idx].id;
        
        fetch(`http://localhost:8080/todos/${studentId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log('Student deleted:', res);
            array.splice(idx, 1);
            tr_body.remove();
        })
        
    };
    const dialog = document.querySelector('.dialog')
    const save_edit = document.querySelector('.save_edit')
    const new_name = document.querySelector('.new_name')
    const new_age = document.querySelector('.new_age')
    btn_edit.onclick = () => {
        dialog.showModal()
        save_edit.onclick = (e) => {
            e.preventDefault()
            const val = new_name.value
            const val_age = new_age.value
            item.name = val
            item.age = val_age
            name.innerHTML = item.name
            age.innerHTML = now_year - item.age
            dialog.close()
        }
    }

    return tr_body
}