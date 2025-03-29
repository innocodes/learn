/**
 * 1. Always capitalize the name of a class
 * 2. Classes always have constructor
 */

class Cookie {
    constructor (color) {
        this.color = color;
    }

    getColor() {
        console.log('getColor():', this.color);
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

let colorOne = cookieOne.getColor();
console.log(colorOne);
cookieOne.setColor('yellow');
colorOne = cookieOne.getColor();
console.log(colorOne);


let obj1 = {
    name: 'Innocent',
}

let obj2 = obj1

console.log('obj2.name', obj2.name );

obj1 = {
    name: 'Oyebode',
}

obj1.name = 'Oye';

console.log('obj1.nam,', obj1?.name);
console.log('obj2.nam,', obj2?.name);
