(function() {
  var form = document.getElementById("addForm");
  var itemList = document.getElementById("items");
  //Form Submit
  form.addEventListener("submit", addItem);
  // Delete event
  //itemList.addEventListener("click", removeItem);
  //Mark Item as Done
  //itemList.addEventListener("click", markAsDone);
  function addItem(e) {
    e.preventDefault();
    //Get input value
    var newItem = document.getElementById("item").value;
    //Create new li element and class
    var li = document.createElement("li");
    li.className = "list-group-item";
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create Delete Button and Done Button
    var deleteBtn = document.createElement("button");
    // add click event listener
    deleteBtn.onclick = function(e) {
      console.log('delete button was clicked!');
      console.log(e.target);
    }
    deleteBtn.id = "delete";
    deleteBtn.className = "delete";
    var doneBtn = document.createElement("button");
    doneBtn.className = "done";
    //append text node to buttons
    deleteBtn.appendChild(document.createTextNode("X"));
    doneBtn.appendChild(document.createTextNode("Done"));
    //append buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    //append li to list
    itemList.appendChild(li);
  }
  //Delete Item
  // document.getElementById("delete").addEventListener("click", removeItem);
  function removeItem(e) {
    if (e.target.classList.contains("delete"));
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
  /* var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  var doneBtn = document.createElement("button");
  doneBtn.className = "done"; */
  function markAsDone(e) {
    if (e.target.classList.contains("done"));
    var liDone = (e.target.parentElement.style.textDecoration = "line-through");
  }
})();