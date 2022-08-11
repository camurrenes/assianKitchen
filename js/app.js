// let itemsDOM = document.querySelector("#items")
let itemsDOM = document.querySelector("#items")
//buttons container
let btnContainer = document.getElementsByClassName("btn-container")["0"]
//create button
let allBTN = document.createElement("button")
allBTN.classList.add("btn", "btn-outline-dark", "btn-item")// add class
allBTN.id = "All"
allBTN.innerHTML = "All"
let koreaBTN = document.createElement("button")
koreaBTN.classList.add("btn", "btn-outline-dark", "btn-item")// add class
koreaBTN.id = "Korea"
koreaBTN.innerHTML = "Korea"
let japanBTN = document.createElement("button")
japanBTN.classList.add("btn", "btn-outline-dark", "btn-item")// add class
japanBTN.id = "Japan"
japanBTN.innerHTML = "Japan"
let chinaBTN = document.createElement("button")
chinaBTN.classList.add("btn", "btn-outline-dark", "btn-item")// add class
chinaBTN.id = "China"
chinaBTN.innerHTML = "China"


btnContainer.appendChild(allBTN)
btnContainer.appendChild(koreaBTN)
btnContainer.appendChild(japanBTN)
btnContainer.appendChild(chinaBTN)
filterItems()

btnContainer.addEventListener("mouseup", function listItems(event) {
    filterItems(event.target.innerHTML)
})


function filterItems(categoryList = "All") {
    if(categoryList.length>20){
        return
    }
    itemsDOM.innerHTML=""
    for (index = 0; index < menu.length; index++) {
        
        if (menu[index].category === categoryList || categoryList == "All") {
            let itemDivDOM = document.createElement('div')
            let infoDivDOM = document.createElement('div')
            let titleDivDOM = document.createElement('div')
            let textDivDOM = document.createElement('div')
            itemDivDOM.classList.add("menu-items", "col-lg-6", "col-sm-12")
            infoDivDOM.classList.add("menu-info")
            titleDivDOM.classList.add("menu-title")
            textDivDOM.classList.add("menu-text")

            let imageDOM = document.createElement('img')
            imageDOM.classList.add("photo")
            imageDOM.alt = menu[index].title
            imageDOM.src = menu[index].img

            let titleDOM = document.createElement('h4')
            titleDOM.textContent = menu[index].title

            let priceDOM = document.createElement('h4')
            priceDOM.classList.add("price")
            priceDOM.textContent = menu[index].price

            textDivDOM.innerHTML = menu[index].desc

            itemDivDOM.appendChild(imageDOM)
            itemDivDOM.appendChild(infoDivDOM)
            infoDivDOM.appendChild(titleDivDOM)
            infoDivDOM.appendChild(textDivDOM)
            titleDivDOM.appendChild(titleDOM)
            titleDivDOM.appendChild(priceDOM)
            itemsDOM.appendChild(itemDivDOM)
        }
    }
}