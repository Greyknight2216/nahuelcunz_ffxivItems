setItems()
// let itemName = prompt("Item Name").toLowerCase();
let currentItem = getItem(itemName)
document.getElementById("item").innerHTML=currentItem["name"]
document.getElementById("legend").innerHTML=currentItem["legend"]
document.getElementById("stats").innerHTML=currentItem["stat"]
document.getElementById("price").innerHTML=currentItem["price"]
