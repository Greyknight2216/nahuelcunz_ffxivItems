const items = {}

function setItems(){
    const itemJson = {
        "items": [{
                "name": "sword",
                "stats": "Physical Damage 50",
                "price": "500G"
            },
            {
                "name": "Shield",
                "stats": "Damage Reduction 70",
                "price": "700G"
            },
            {
                "name": "Chest Plate",
                "stats": "Defense 80",
                "price": "1000G"
            },
            {
                "name": "Leggings",
                "stats": "Defense 75",
                "price": "900G"
            },
            {
                "name": "Helmet",
                "stats": "Defense 65",
                "price": "650G"
            }
        ]
    }
    
    for(let i = 0; i < itemJson["items"].length; i++){
        items[itemJson["items"][i]["name"].toLowerCase()] = new Item(itemJson["items"][i]["name"], itemJson["items"][i]["stats"], itemJson["items"][i]["price"]);
    }
}

function getItem(name){
    return items[name]
}