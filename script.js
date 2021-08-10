'use strict';

const books=document.querySelectorAll('.books'),
book=document.querySelectorAll('.book')


books[0].prepend(book[1]);
books[0].append(book[2]);
book[3].before(book[4]);

document.body.style.backgroundImage='url(image/you-dont-know-js.jpg)';


let collectionA=document.querySelectorAll('a');
collectionA[2].textContent='Книга 3. this и Прототипы Объектов';


let adv=document.querySelector('.adv');
adv.remove();

const newLi=document.createElement('li');
newLi.textContent='Глава 8: За пределами ES6';

let collectionLi=document.querySelectorAll('li');

collectionLi[55].after(newLi);

collectionLi[9].after(collectionLi[12]);
collectionLi[12].after(collectionLi[14]);

collectionLi[37].after(collectionLi[45]);
collectionLi[9].after(collectionLi[12]);
collectionLi[40].after(collectionLi[38]);