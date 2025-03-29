class ArrayMethods {
    constructor() {
        this.array = [];
    }

    _push(value) {
        /**
         * adds new element to the end of an array
         * and returns the length of the array.
         * It has a Big O of 1
         */
        this.array.push(value);
    }

    _unshift(value) {
        /**
         * adds new element to the beginning of an array
         * and returns the length of the array.
         * It has a Big O of n (because it needs to reindex the elements in the array).
         */
        this.array.unshift(value);
    }

    _pop() {
        /**
         * removes the last element of an array and
         * returns the removed element.
         * It has a Big of 1
         */
        this.array.pop();
    }

    _shift() {
        /**
         * removes the first element of an array and
         * returns the removed element
         * It has a Big O of n (because it needs to reindex the elements in the array).
         */
        this.array.shift();
    }
}

const MyArray = new ArrayMethods();
console.log(MyArray);

MyArray._push(1);
console.log(MyArray);

MyArray._push(2);
console.log(MyArray);

MyArray._push(3);
console.log(MyArray);

MyArray._push(4);
console.log(MyArray);

MyArray._push(5);
console.log(MyArray);

MyArray._unshift(0);
console.log(MyArray);

MyArray._pop();
console.log(MyArray);

MyArray._shift();
console.log(MyArray);
