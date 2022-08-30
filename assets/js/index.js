setItems()
let itemName = prompt("Item Name").toLowerCase();
let currentItem = getItem(itemName)
document.getElementById("item-data").innerHTML=currentItem["name"] + " " + currentItem["stat"] + " " + currentItem["price"]
console.log(document.getElementById("item-data"), getItem("sword"))