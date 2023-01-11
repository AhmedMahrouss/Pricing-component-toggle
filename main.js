let check = document.querySelector('.check');
let price1 = document.querySelectorAll('.price1');
let price2 = document.querySelectorAll('.price2');
check.onclick = ()=>{
check.classList.toggle('toggleCheck');
price1.forEach(price=>{
    price.classList.toggle('togglePrice1')
})
price2.forEach(price=>{
    price.classList.toggle('togglePrice2')
})
}