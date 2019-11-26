(function() {
  var form = document.getElementById("addForm");
  var itemList = document.getElementById("items");
  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", function() {
    for (i = 0; i < itemList.children.length; i++) {
      itemList.children[i].style = "display: none";
    }
  });
  //Form Submit
  form.addEventListener("submit", addItem);
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
    var doneBtn = document.createElement("button");
    // add click event listener
    deleteBtn.onclick = function(e) {
      console.log("delete button was clicked!");
      li.style = "display: none";
    };

    var lineThrough = false;

    doneBtn.onclick = function(e) {
      lineThrough = !lineThrough;
      console.log("done button clicked!");
      if (lineThrough == true) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    };

    deleteBtn.id = "delete";
    deleteBtn.className = "delete";
    doneBtn.id = "done";
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
})();
