const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings - Old Way
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul>';

// Little bit better but Still OLD
html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';


function hello() {
  return 'hello';
}

// With template strings/literal (es6)
html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job ${job}</li>
      <li>City: ${city}</li>
      <li>Math: ${2+2}</li>
      <li>Function: ${hello()}</li>
      <li>Condition: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>    
`;




// Output
console.log(html);
document.body.innerHTML = html;