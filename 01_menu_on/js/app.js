const gnb = document.querySelectorAll('.gnb li')
const url = location.href

console.log(gnb);
console.log(url);

// console.log(url.indexOf('main'));

function menuON(i) {
    gnb.forEach(item => item.classList.remove('on'))
    gnb[i].classList.add('on')
}

if(url.indexOf('main') > 0) {
    menuON(0)
} else if(url.indexOf('intro') > 0) {
    menuON(1)
} else if(url.indexOf('sevice') > 0) {
    menuON(2)
} else if(url.indexOf('blog') > 0) {
    menuON(3)
}
