/*
function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }
  
  greeting("Harry", "English");
  */
  /* output
  Bonjour Harry!
  */

  function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(10, 2)
  console.log("Hasil Perkalian =");
  console.log(result);
  
  /* output
  20
  */
  const greeting = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
  }
  
  console.log(greeting('Ron', 'English'));
  
  /* output
  Good Morning Ron!
   */
  const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
  };
  
  function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
  }
  
  introduce(user);
  
  /* output
  kren is Kylo Ren
  */
 function exponentsFormula(baseNumber, exponent =2) {
    const hasil = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${hasil}`); 
    
 }

 exponentsFormula(4);

 function sum(...numbers) {
    let result1 = 0;
    for (let number of numbers) {
        result1 += number;
 }
 return result1;
}
 console.log(sum(1, 2, 3, 4, 5));

 const sayName = name1 => {
    console.log(`Nama saya ${name1}`)
  }
  
  sayName("Leia");
  
  const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

const multiply1 = (a1, b1) => a1 * b1;
console.log(multiply1(3, 4));

//closure
function init() {
    const name2 ='obi wan';
    function greet1() {
        console.log(`Halo, ${name2}`)
        
    }
    greet1();
}
init();

let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */