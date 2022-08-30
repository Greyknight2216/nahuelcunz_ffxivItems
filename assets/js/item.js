class Item{
    constructor(name, stat, price) {
        this.name = name.toUpperCase();
        this.stat = stat;
        this.price = price;
    }
    description(){
        console.log(this.name + " " + this.stat + " " + this.price)
    }
}

