let itemID = ''

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    // check if the element is an input element and the key is enter
    if (e.target.nodeName === "INPUT" && e.key === 'Enter') {
        let result = e.target.value
        //drawCardFunction(result)
        if (!isNaN(result)){
            getData(result)
        }
  }
});

let itemData = {}

function showData() {
    console.log(itemData['ID'], itemData['IconHD'], itemData['Name'], itemData['BaseParamSpecial0']['Description'])
}

function drawCard() {
    document.getElementById('description').innerHTML = itemData['Description_en'];
    document.getElementById('item').innerHTML = itemData['Name'];
    let itemIcon = document.getElementById('iconImg')
    itemIcon.src = 'https://xivapi.com' + itemData['IconHD'];
    let universalis = document.getElementById('market')
    universalis.href = 'https://universalis.app/market/' + itemID;
}

function getData(itemID) {

    fetch(`https://xivapi.com/Item/${itemID}`)
    .then(response => response.json())
    .then(data => {
        itemData = data
        showData()
        drawCard()
    })

}



let hello = console.log('hello')