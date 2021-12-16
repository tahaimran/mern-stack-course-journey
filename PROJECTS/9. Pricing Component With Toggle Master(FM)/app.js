let switchs = document.getElementById("flexSwitchCheckDefault");



let basicPrice = document.getElementById("basic");
let professionalPrice = document.getElementById("professional");
let masterPrice = document.getElementById("master");



let price = () => {

    if (switchs.checked == true) {
        basicPrice.innerHTML = "$199.99"
        professionalPrice.innerHTML = "$249.99"
        masterPrice.innerHTML = "$399.99"

    } else {
        basicPrice.innerHTML = "$19.99"
        professionalPrice.innerHTML = "$24.99"
        masterPrice.innerHTML = "$39.99"
    }
}