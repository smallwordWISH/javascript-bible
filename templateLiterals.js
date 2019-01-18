// Pre-ES6 - Template Strings

const myNumber = 10;
const myStr = "Hello";
const myArr = [1, 2];
const myObj = { x: 10 };
const myBool = true;
const greeting = name => "Hello" + name;


// ES6 - Template literals

const templateLiteral = `${greeting("Mike")} and ${(name => "Hello" + name)("Mile")}`;

const btn1 = "Button 1";
const btn2 = "Button 2";

const myButtons = `
  <div>
    <button>${btn1}</button>
    <button>${btn2}</button>
  </div>
`;

document.body.innerHTML = myButtons;

console.log(templateLiteral);

// tagged templates

const name = "Amber";
const age = 18;

const checkAge = (arrayOfStrings, name, age) => {
  console.log(arrayOfStrings, name, age);
  // arrOfStrings.length - 1 === 其他argument的數量
};

console.log(`${name} is ${age} years old`);
console.log(checkAge`${name} is ${age} years old`);