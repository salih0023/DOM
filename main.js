//selection tous les elements du box !
let parent = document.querySelectorAll(".box")

for(let i = 0; i < parent.length; i++){
    let btnPlus = parent[i].children[5].children[2]
    let quantity = parent[i].children[5].children[1]
    let qty = parseInt(quantity.innerText)
    let price = parent[i].children[3]
    let prix = parseInt(price.innerText)
    let btnMinus = parent[i].children[5].children[0]
    let btnLike = parent[i].children[6].children[0]
   // console.log(btnLike)

    //PlusBtn
    btnPlus.addEventListener("click", function(){
        qty++
        quantity.innerText = qty 
        price.innerText = prix * qty
        sum()
    })
    //MinusBtn
    btnMinus.addEventListener("click", function(){
        if(qty > 0)
        --qty
        quantity.innerText = qty
        price.innerText = prix * qty
        sum()
    })
    btnLike.addEventListener("click",function (){
        if(btnLike.style.color == "red") {
            btnLike.style.color = "black"
        }
        else {
            btnLike.style.color = "red"
        }
    } )
}


let prixTotal = document.querySelector('#prixTotal')
function sum (){
    let totalUnit = document.getElementsByClassName('price')
    let amount = 0
    for(let j = 0; j < totalUnit.length; j++){
        amount+= parseInt(totalUnit[j].innerText)
    }
    prixTotal.innerText = amount
}
//console.log(prixTotal)
// for(let j = 0; j < prixTotal.length; j++){
//     let totalAmount =+ prixTotal[j].children[1].children[1].innerHTML

// }
