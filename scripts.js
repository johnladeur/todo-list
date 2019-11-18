var form = document.getElementById('addForm')
var itemList = document.getElementById('items')


//Form Submit Event
form.addEventListener('submit', addItem)

function addItem(e){
  e.preventDefault();
  
  //Get input value
  var newItem = document.getElementById('item').value;
  
  //Create new li element
  var li = document.createElement('li')
  //add class
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create Delete Button and Done Button
  var deleteBtn = document.createElement('button')
  var doneBtn = document.createElement('button')
  //append text node to buttons
  deleteBtn.appendChild(document.createTextNode('X'))
  doneBtn.appendChild(document.createTextNode('Done'))
   //append buttons to li
  li.appendChild(deleteBtn);
  li.appendChild(doneBtn)
   //append li to list
  itemList.appendChild(li)
}




