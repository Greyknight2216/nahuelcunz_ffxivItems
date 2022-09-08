class Item{
    constructor(name, legend, stat, price) {
        this.name = name.toUpperCase();
        this.legend = legend;
        this.stat = stat;
        this.price = price;
    }
    description(){
        console.log(this.name + " " + this.stat + " " + this.price)
    }
}

