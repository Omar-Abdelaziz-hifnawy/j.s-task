var allProducts = document.querySelectorAll(".card button")
var content = document.querySelector("#content")
var btn = document.querySelector("#addtocart")
var total = document.querySelector("total")
var totalPrice = 0 ;


allProducts.forEach(function (item){
    item.onclick = function(){
        totalPrice += parseInt(item.getAttribute("price"))

        content.innerHTML += item.textContent += "  ";  

        if(content.innerHTML != " "){
            btn.style.display = "block"
        }
    
    
    }
});


btn.onclick = function(){
    document.getElementById("total").innerHTML = totalPrice
}
