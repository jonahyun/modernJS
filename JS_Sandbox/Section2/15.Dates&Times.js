let val;
const today = new Date(); // instantiating date object - if you don't pass anyting it will be today's date
let birthday = new Date('9/10-1981 11:24:00'); // various way to show date below
birthday = new Date('September 10 1981');
birthday = new Date('9/10/2021');



val = birthday;


val = today.getMonth(); // starts at 0
val = today.getDate(); // starts at 1
val = today.getDay(); // starts at 1
val = today.getFullYear(); // 2023
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Amount of time passed since 1/1/1970

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);





console.log(birthday);
console.log(val);
console.log(typeof val); 