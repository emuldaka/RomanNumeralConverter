function inputPrompt(value){
  if(value === ""){output.innerText ="Please enter a valid number";
  } else if(value < 1){
    output.innerText ="Please enter a number greater than or equal to 1"
  } else if(value >= 4000){output.innerText ="Please enter a number less than or equal to 3999"
  } else {output.innerText = convertToRoman(value)}
}

function convertToRoman(num) {

let romanNumArr = []

while (num >= 1000) {
  num -= 1000;
  romanNumArr.push('M')
}
while (num >= 900) {
  num -= 900;
  romanNumArr.push('CM')
}
while (num >= 500) {
  num -= 500;
  romanNumArr.push('D')
}
while (num >= 400) {
  num -= 400;
  romanNumArr.push('CD')
}
while (num >= 100) {
  num -= 100;
  romanNumArr.push('C')
}
while (num >= 90) {
  num -= 90;
  romanNumArr.push('XC')
}
while (num >= 50) {
  num -= 50;
  romanNumArr.push('L')
}
while (num >= 40) {
  num -= 40;
  romanNumArr.push('XL')
}
while (num >= 10) {
  num -= 10;
  romanNumArr.push('X')
}
while (num >= 9) {
  num -= 9;
  romanNumArr.push('IX')
}
while (num >= 5) {
  num -= 5;
  romanNumArr.push('V')
}
while (num >= 4) {
  num -= 4;
  romanNumArr.push('IV')
}
while (num >= 1) {
  num -= 1;
  romanNumArr.push('I')
}


let romanNum = romanNumArr.join("")

 return romanNum;
}
