// console.log("Jay Shree Ram");

let editIndexNumber;

let form = document.getElementById("grocery-form");
let clearAllBtn = document.getElementById("clearAll");
let alert = document.getElementById("alert");
let addBtn = document.getElementById("addBtn");


clearAllBtn.addEventListener("click",function()
{
    localStorage.clear();
    alertMessege(`Removed all items from List`,`danger`);
    showItems();
})
    
showItems();

form.addEventListener("submit",addItemToList);

// ---------- FUNCTION TO ADD ITEM  ---------------- //
function addItemToList(e)
{
    e.preventDefault();
    let itemName = document.getElementById("itemInput");

    fetchItemList();

    if(addBtn.innerText === `Edit`)
    {
        // For edit item and update in list
        itemListObj[editIndexNumber] = capitalizeFirstLetter(itemName.value);
        addBtn.innerText = `Add Item`;
        alertMessege(`Item edited successfully`,`success`);

    }
    else
    {
        // For simply add item
        itemListObj.push(capitalizeFirstLetter(itemName.value));
    }



    localStorage.setItem("itemList",JSON.stringify(itemListObj));
    itemName.value = "";

    alertMessege(`Item added Successfully`,`success`);

    showItems();
}

// --------------- FUNCTION TO SHOW ITEM LIST ---------------- //
function showItems()
{
    fetchItemList();    

    let innerHtml = ``;

    itemListObj.forEach(function(element,index)
    {
        innerHtml += `<div class="item">
                        <p id="itemName">${element}</p>
                        <div class="button-section">
                            <i class="fa-solid fa-pen-to-square edit" id = "${index+1}" onclick = "editItem(this.id)"></i>
                            <i class="fa-solid fa-trash delete" id = "${index}" onclick = "deleteItem(this.id)"></i>
                        </div>
                      </div>
                     `
    });

    let listContainer = document.getElementById("list-container");

    listContainer.innerHTML = innerHtml;

    if(itemListObj.length == 0)
    {
        clearAllBtn.style.visibility = "hidden";
    }
    else
    {
        clearAllBtn.style.visibility = "visible";
    }
    
}

// ------------ FUNCTION TO Capitalize First Letter of Title --------------- //
function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ------------- FUNCTION TO DELETE LIST ITEM ------------------------------ //
function deleteItem(indexNumber)
{
    fetchItemList();

    itemListObj.splice(indexNumber,1);

    localStorage.setItem("itemList",JSON.stringify(itemListObj));

    alertMessege(`Removed Item from List`,`danger`);
    
    showItems();
    
}

// -------------- FUNCTION TO FETCH ITEM LIST FROM LOCAL STORAGE ----------- //
function fetchItemList()
{
    let itemList = localStorage.getItem("itemList");
    
    if(itemList == null)
    {
        itemListObj = [];
    }
    else
    {
        itemListObj = JSON.parse(itemList);
    }
}

//--------------------- FUNCTION TO SHOW ALERT MESSEGE -------------------//
function alertMessege(messege,type)
{    
    alert.innerHTML = messege;
    alert.classList.add(`alert-${type}`);

    // remove alert
    setTimeout(function()
    {
        alert.innerHTML = ``;
        alert.classList.remove(`alert-${type}`);
    },1000);
}

// --------------------FUNCTION TO EDIT EXISTING ITEM IN THE LIST ------------//
function editItem(indexNumber)
{
    // editFlag = true;

    let itemName = document.getElementById("itemInput");

    fetchItemList();

    itemName.value = itemListObj[indexNumber-1];   

    addBtn.innerText = `Edit`;

    editIndexNumber = indexNumber-1;
}