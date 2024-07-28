const character = "$"; // Configuration symbol to pyramid
const count = 15; // Configuration number of rows. 
const rows = [];
let inverted = false; // Configuration what to inverted
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//Using standart method FOR
// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }

//Refactored code using an arrow function and simplified logic
for (let i = 1; i <= count; i++) {
    rows[inverted ? 'unshift' : 'push'](padRow(i, count));
  }

let result = ""

//Using method For
// for (const row of rows) {
//   result = result + "\n" + row;
// }

//Refactored code using an arrow function
rows.forEach(row => result += "\n" + row);

//If needed allert you can use this
//alert(result);

console.log(result);