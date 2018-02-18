import ua from '../src/h-ua'
console.log(ua());
console.log(window.HAPPY_UA());
document.querySelector('.test').innerHTML = ua();