const tataruStock = [
    {
        name: 'Rinascita Greatsword',
        price: 300000,
        category: 'sword',
    },
    {
        name: 'Rinascita Katana',
        price: 400000,
        category: 'sword',
    },
    {
        name: 'Rinascita Manatrigger',
        price: 450000,
        category: 'sword',
    },
    {
        name: 'Rinascita Coat of Casting',
        price: 500000,
        category: 'chestplate',
    },
    {
        name: 'Rinascita Coat of Healing',
        price: 550000,
    }
]

let insertCategory = prompt("Category").toLowerCase()
const searchResult = tataruStock.find(item => item.category === insertCategory);
console.log(searchResult);

const filterResult = tataruStock.filter(item => item.category ===  insertCategory && item.price < 450000);
console.log(filterResult);