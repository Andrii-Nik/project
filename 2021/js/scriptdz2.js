"use strict";

if (5) {
    console.log('ok!'); 
} else {
    console.log('Ne ok');
}

const num = 20;

/* if (num < 49) {
    console.log ('Norm');
} else if (num > 100) {
    console.log ('mnogo');
} else {
    console.log ('pravilno');
}

(num == 50) ? console.log('ok') : console.log('ne ok'); */

switch (num) {
    case 49:
        console.log('не верно');
        break;
    case 100:
        console.log('не верно');
        break;
    case 50:
        console.log('верно');
        break;  
    default:
        console.log('ничего не подошло');
        break;      
}