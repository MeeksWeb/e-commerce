const amount1 = document.querySelector(".amount1")
const amount2 = document.querySelector(".amount2")
const minus = document.querySelector(".minus")
const number = document.querySelector(".number")
const plus = document.querySelector(".plus")
const large = document.querySelector(".large")
const small = document.querySelector(".images")
const menu = document.querySelector(".menu")
const items = document.querySelector(".items")
const contents = document.querySelector(".contents-left")


function add() {
    number.innerHTML ++
}
function subtract() {
    if (number.innerHTML == 0) {
        return;
    } else {
        
        number.innerHTML --
    }
}

function imageSwap(e) {
    large.src = e.target.src

}
function closeMenu() {
    if (menu.src = "icon-menu.svg" && window.innerWidth < 660) {
        menu.src = "icon-close.svg"
        items.style.display = "flex"
        
    }
}

function openMenu() {
    if (menu.src = "icon-close.svg" && window.innerWidth < 660 ) 
    {
            menu.src = "icon-menu.svg"
            items.style.display = "none"
      }
}



menu.addEventListener("dblclick", openMenu)
menu.addEventListener("click", closeMenu)
plus.addEventListener("click", add)
minus.addEventListener("click", subtract)
small.addEventListener('click', imageSwap)



















