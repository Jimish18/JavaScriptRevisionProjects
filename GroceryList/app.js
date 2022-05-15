console.log("Jay Shree Ram");

let form = document.getElementById("grocery-form");
let clearAllBtn = document.getElementById("clearAll");


clearAllBtn.addEventListener("click",function()
{
    localStorage.clear();
    showItems();
})
    
showItems();

form.addEventListener("submit",addItemToList);

// ---------- FUNCTION TO ADD ITEM  ---------------- //
function addItemToList(e)
{
    e.preventDefault();
    let itemName = document.getElementById("itemInput");

    let itemList = localStorage.getItem("itemList");
    
    if(itemList == null)
    {
        itemListObj = [];
    }
    else
    {
        itemListObj = JSON.parse(itemList);
    }

    itemListObj.push(capitalizeFirstLetter(itemName.value));

    localStorage.setItem("itemList",JSON.stringify(itemListObj));
    itemName.value = "";

    showItems();
}

// --------------- FUNCTION TO SHOW ITEM LIST ---------------- //
function showItems()
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

    let innerHtml = ``;

    itemListObj.forEach(function(element,index)
    {
        innerHtml += `<div class="item">
                        <p id="itemName">${element}</p>
                        <div class="button-section">
                            <i class="fa-solid fa-pen-to-square edit"></i>
                            <i class="fa-solid fa-trash delete"></i>
                        </div>
                      </div>
                     `
    });

    let listContainer = document.getElementById("list-container");

    listContainer.innerHTML = innerHtml;

    
    if(itemList != null)
    {
        clearAllBtn.style.visibility = "visible";
    }
    else
    {
        clearAllBtn.style.visibility = "hidden";
    }
}

// ------------ Capitalize First Letter of Title --------------- //
function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function deleteItem()
{

}