function minimal(a,b) {
    if (a === b){
        console.log(a);
        return a;
    }else if (a > b){
        console.log(b);
        return b;
    }else if (a < b){
        console.log(a);
        return a;
    }

    
}
minimal(1,4);
minimal(3,2);
minimal(3,3);

const findIndex = (array, number) => array.indexOf(number);
    

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 5));