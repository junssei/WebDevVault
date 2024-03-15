function update(object){
    var chng = prompt("Type to edit your title");

    if(chng != null){
        object.innerText = chng;
    }
}

function addParent(){
    var text = document.getElementById("title").value;

    var newdaList = document.createElement("div");
    newdaList.setAttribute("class", "daList");

    var listHeader = document.createElement("div");
    listHeader.setAttribute("class", "daListHeader");

    var title = document.createElement("h1");
    title.setAttribute("class", "listTitle");
    title.innerText = text;

    var closeBtn = document.createElement("span");
    closeBtn.setAttribute("class", "material-symbols-outlined");
    closeBtn.setAttribute("onclick", "removeParent(this)");
    closeBtn.innerText = "close";

    var dalistItems = document.createElement("ul");
    dalistItems.setAttribute("class", "daListItems");

    var addboxBtn = document.createElement("span");
    addboxBtn.setAttribute("class", "material-symbols-outlined");
    addboxBtn.setAttribute("id", "childboxBtn");
    addboxBtn.setAttribute("onclick", "addItems()");
    addboxBtn.innerText = "add_box";

    listHeader.appendChild(title);
    listHeader.appendChild(closeBtn);

    newdaList.appendChild(listHeader);
    newdaList.appendChild(dalistItems);
    newdaList.appendChild(addboxBtn);

    document.getElementById("listArea").appendChild(newdaList);
}

function removeParent(object){
    var parent = object.parentNode.parentNode;
    parent.parentNode.removeChild(parent);
}

function addItems(object){
    var text = prompt("Type to add an item");

    

}

function updateItem(object){
    var text = prompt("Type to edit the item");
    var node = object.parentNode;
    
}

function removeItem(object){
    var text = prompt("Type to edit the item");
    var node = object.parentNode;
}

function itemsCheck(){

}