var count = -1; 

function addParent(){
    count++;
    console.log(count);
    var text = document.getElementById("title").value;

    var newdaList = document.createElement("div");
    newdaList.setAttribute("class", "daList");

    var listHeader = document.createElement("div");
    listHeader.setAttribute("class", "daListHeader");

    var title = document.createElement("h1");
    title.setAttribute("class", "listTitle");
    title.setAttribute("onclick", "updateParent(this)");
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
    addboxBtn.setAttribute("onclick", "addItem(this)");
    addboxBtn.setAttribute("data-ul-index", count);
    addboxBtn.innerText = "add_box";

    listHeader.appendChild(title);
    listHeader.appendChild(closeBtn);

    newdaList.appendChild(listHeader);
    newdaList.appendChild(dalistItems);
    dalistItems.appendChild(dasetItems);
    newdaList.appendChild(addboxBtn);

    document.getElementById("listArea").appendChild(newdaList);
}

function addItem(button){
    var item = prompt("Add Item");

    if(item != null){
        var ulIndex = parseInt(button.getAttribute("data-ul-index"));
        var ulList = document.querySelectorAll("ul.dasetItems");

        // var textNode = document.createElement("p");
        // textNode.textContent = item;

        if (ulIndex >= 0 && ulIndex < ulList.length) {
            var ulElement = ulList[ulIndex];
        
            // Create a new list element
            var newListElement = document.createElement("li");
            newListElement.textContent = item;
            
            var delbtn = document.createElement("span");
            delbtn.setAttribute("class", "material-symbols-outlined");
            delbtn.setAttribute("id", "deltItem");
            delbtn.setAttribute("onclick", "removeItem(this)");
            delbtn.innerText = "delete";

            newListElement.appendChild(delbtn);

            // Append the new list element to the ul tag
            ulElement.appendChild(newListElement);
        } else {
            console.error("Invalid ul index specified");
        }
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