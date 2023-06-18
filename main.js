
let parent = document.querySelectorAll(".box")

for(let i = 0; i < parent.length; i++){
    let btnPlus = parent[i].children[5].children[2]
    // console.log(btnPlus)
    let quantity = parent[i].children[5].children[1]
    let qty = parseInt(quantity.innerText)
    let price = parent[i].children[3]
    let prix = parseInt(price.innerText)
    let btnMinus = parent[i].children[5].children[0]
    //console.log(likrBtn)

    //PlusBtn
    btnPlus.addEventListener("click", function(){
        qty++
        quantity.innerText = qty 
        price.innerText = prix * qty
    })
    //MinusBtn
    btnMinus.addEventListener("click", function(){
        if(qty > 1)
        qty--
        quantity.innerText = qty 
        price.innerText = prix * qty
    })
}
