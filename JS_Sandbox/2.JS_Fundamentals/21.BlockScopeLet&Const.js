// Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}
test();

// Block Scope - anything wrapped in curly braces, if,loop etc.

if(true) {
  //Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

// Var changes the global scope value vs Let does not
for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
} 

console.log('Global Scrope: ', a, b, c);