//Example - 1

const person = {firstName:"Dilruba", lastName:"Borna", age:23}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";     //!   + " " দেয়ার ফলে space আসবে 
}
// console.log(txt)

/*------------------------------*/

//Example - 2
const numbers = [45, 4, 9, 16, 25];

let text = "";
for (let x in numbers) {
  text += numbers[x] + " "; 
}
// console.log(text);

/*------------------------------*/

//Example - 3
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
