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

    var dalistItems = document.createElement("div");
    dalistItems.setAttribute("class", "daListItems");
    
    var dasetItems = document.createElement("ul");
    dasetItems.setAttribute("class", "dasetItems");

    var addboxBtn = document.createElement("span");
    addboxBtn.setAttribute("class", "material-symbols-outlined");
    addboxBtn.setAttribute("id", "childboxBtn");
    addboxBtn.setAttribute("onclick", "addItem()");
    addboxBtn.innerText = "add_box";

    listHeader.appendChild(title);
    listHeader.appendChild(closeBtn);

    newdaList.appendChild(listHeader);
    newdaList.appendChild(dalistItems);
    dalistItems.appendChild(dasetItems);
    newdaList.appendChild(addboxBtn);

    document.getElementById("listArea").appendChild(newdaList);
}

function addItem(){
    var item = prompt("Add Item");

    if(item != null){
        var list = document.createElement("li");
        list.setAttribute("class", "daItem");

        var textNode = document.createElement("p");
        textNode.innerText = item;

        var delbtn = document.createElement("span");
        delbtn.setAttribute("class", "material-symbols-outlined");
        delbtn.setAttribute("id", "deltItem");
        delbtn.setAttribute("onclick", "removeItem(this)");
        delbtn.innerText = "delete";

        list.appendChild(textNode);
        list.appendChild(delbtn);

        var specificUl = document.querySelector(".dasetItems");

        specificUl.appendChild(list);
    }
}

function updateParent(object){
    var chng = prompt("Type to edit your title");

    if(chng != null){
        object.innerText = chng;
    }
}

function removeParent(object){
    var parent = object.parentNode.parentNode;
    parent.parentNode.removeChild(parent);
}

function updateItem(object){
    var text = prompt("Update Item");

    if(text!=null){
    object.innerText = text;
    }
}

function removeItem(object){
    var parent = object.parentNode;
    parent.parentNode.removeChild(parent);
}