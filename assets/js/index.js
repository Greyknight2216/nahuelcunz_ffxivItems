setItems()
let itemName = prompt("Item Name").toLowerCase();
let currentItem = getItem(itemName)
document.getElementById("item").innerHTML=currentItem["name"]
document.getElementById("stats").innerHTML=currentItem["stat"]
document.getElementById("price").innerHTML=currentItem["price"]
console.log(document.getElementById("item-data"), getItem("sword"))