
let item = document.getElementById('input').value
let addBtn = document.getElementById('add-btn')

//add list item
addBtn.addEventListener('click', function(){
    let ul = document.querySelector('list');
    let li = document.createElement('li');
    let item = document.getElementById('input').value
    if (item == ''){
        alert("Start your next item!")
    } else {
        li.appendChild(document.createTextNode(item))
    }
})

