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

    var inputValue = document.getElementById("item").value;
    var li = createLiElement(inputValue);

    //Create Delete Button and Done Button
    var deleteBtn = createDeleteButton(li);
    var doneBtn = createDoneButton(li);

    //append buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    
    itemList.appendChild(li);
  }

  function createLiElement(inputValue) {
    const liElement = document.createElement("li");

    liElement.className = "list-group-item";

    liElement.appendChild(document.createTextNode(inputValue));

    return liElement;
  }

  function createDoneButton(li) {
    const doneButton = document.createElement("button");

    doneButton.id = "done";
    doneButton.className = "done";
    doneButton.appendChild(document.createTextNode("Done"));

    var crossItem = false;

    doneButton.onclick = function(e) {
      crossItem = !crossItem;
      console.log("done button clicked!");
      if (crossItem == true) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    };

    return doneButton;
  }

  function createDeleteButton(li) {
    const deleteButton = document.createElement("button");

    deleteButton.id = "delete";
    deleteButton.className = "delete";
    deleteButton.appendChild(document.createTextNode("X"));

    deleteButton.onclick = function(e) {
      li.style = "display: none";
    };

    return deleteButton;
  }
})();
