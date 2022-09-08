const items = {}

function setItems(){
    const itemJson = {
        "items": [{
                "name": "sword",
                "stats": "Physical Damage 50",
                "legend": "Super cool sword",
                "price": "500G"
            },
            {
                "name": "Shield",
                "stats": "Damage Reduction 70",
                "legend": "Powerful shield",
                "price": "700G"
            },
            {
                "name": "Chest Plate",
                "stats": "Defense 80",
                "legend": "Chest Plate to resist everything",
                "price": "1000G"
            },
            {
                "name": "Leggings",
                "stats": "Defense 75",
                "legend": "Leggings for legs obviously",
                "price": "900G"
            },
            {
                "name": "Helmet",
                "stats": "Defense 65",
                "legend": "Here is the helmet of the legends",
                "price": "650G"
            }
        ]
    }
    
    for(let i = 0; i < itemJson["items"].length; i++){
        items[itemJson["items"][i]["name"].toLowerCase()] = new Item(itemJson["items"][i]["name"], itemJson["items"][i]["legend"], itemJson["items"][i]["stats"], itemJson["items"][i]["price"]);
    }
}

function getItem(name){
    return items[name]
}