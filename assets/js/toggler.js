
let btn = document.getElementById('btnToggler')
    btn.addEventListener("click", chocoboMode)
    function chocoboMode(){
    let element = document.body;
    element.classList.toggle("chocoboMode")
}