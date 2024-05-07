//alert("Js is wrkngi!")
console.time("time1");

var length = 10;
var fullname = "Alex de Souza";
var student = {
  number: 202003001011,
  fullname: "Kazma Icardi",
  department: "Worst Football player",
};

console.log(length, fullname);
console.log({ length, fullname, student, number: student.number });

//empty array
var emptyArray = [];

//array of strings
var fruits = ["apple", "orange", "banana"];
console.log({ fruits });

//array of objects
var studentList = [
  {
    number: 202003001011,
    fullname: "Kazma Icardi",
    department: "Worst Football player",
  },
  {
    number: 202003001012,
    fullname: "Fatih Terim",
    department: "Worst Manager",
  },
  {
    number: 202003001013,
    fullname: "Ali Koç",
    department: "Best President",
  },
];

console.log({
  President: studentList[2].department,
  HisName: studentList[2].fullname,
});

console.timeEnd("time1");

//function1

function functionName(parameter1, parameter2) {
  //your function code
  //return 0;
}

//get the maximum of 2 numbers
function getMax(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}

//second way
var getMax2 = function (num1, num2) {
  if (num1 > num2) return num1;
  return num2;
};

//thirdway: lambda function
var getMax3 = (num1, num2) => (num1 > num2 ? num1 : num2);

var maxOfTwoNumbers = getMax(5, 8);
var maxOfTwoNumbers2 = getMax2(5, 8);
var maxOfTwoNumbers3 = getMax3(5, 8);

console.log({ maxOfTwoNumbers, maxOfTwoNumbers2, maxOfTwoNumbers3 });

console.assert(getMax(8, 5) === 8, "Failed: getMax(3, 5)");
//console.assert(getMax(5,8) === 7, "Failed: getMax");
console.assert(getMax(5, 5) === 5);
console.assert(getMax2(5, 8) === 5, "Failed: getMin(5, 8) should return 5");
console.assert(
  getMax3(-1, -1) === -1,
  "Failed: getMin(-1, -1) should return -1"
);

//string Functions
//+ ->concatenation
//length ->return the character count of the string
//indexof ->Ffinds the location of a string inside the string
//lastindexof ->Finds the location of a string inside the string, inreverse
//slice(start, end) _>gets a partition of a string
//substring(start, end) ->similar to slice, but no negative values
//substr(start, length) -< similar to slice, but second parameter is length

var message = "Today, weater is very good.Hello" + fullname;

console.log(message);
console.log(message.length);
console.log(message.indexOf("weather"));
console.log(message.indexOf("a"));
console.log(message.indexOf("a", 4));
console.log(message.indexOf("bee"));

function getCount(message, searchKey) {
  if (message == "" || searchKey == "") return 0;

  var position = 0;
  var numOfItems = 0;
  position = message.indexOf(searchKey);
  while (position != -1) {
    numOfItems++;
    position = message.indexOf(searchKey, position + 1);
  }
  return numOfItems;
}

console.assert(
  getCount("Aykut Kocaman, Aykut Kocaman", "Kocaman") === 3,
  "Failed:getCount(Kocaman)"
);

console.log(message.slice(-12, -7));
console.log(message.substring(7, 14));
console.log(message.substr(7, 7));

var fruits = ["apple", "orange", "banana"];
var numbers = [5, 8, 2, 1, 9];

//join: array elemanlarını bir ayraç ile birleştirir
//pop: arrayin son elemanını çıkartır
//push: array sonuna bir eleman ekler
//shift: popa benzer, arrayın ilk elemanını çıkarır
//unshift: pusha benzer, arrayın ilk elemanın ekleme yapar
//delete: farklı çalışır, herhangi bir elemanın için siler, diziden çıkarır
//splice: arraya istediğiniz indexe eleman ekleme/çıkarma yapar
//concat: birden fazla arrayı birleştirir
//slice:arrayın bir parçasının alır başka bir array yapar:
// [...array] clone the array
//sort:diziyi sıralar

console.log(fruits.join());
console.log(fruits.join("->"));
fruits.push("Grape", "Melon", "Water melon");
console.log({ fruits });
var watermelon = fruits.pop();
console.log({ watermelon, fruits });
fruits.unshift("Kiwi");
console.log({ unshift: { ...fruits } });
fruits.shift();
console.log({ shift: fruits });
fruits.splice(2, 0, "lemon");
console.log({ splice1: { ...fruits } });
fruits.splice(2, 1);
console.log({ splice2: { ...fruits } });
console.log({ slice: fruits.slice(2, 3) });
console.log({ slice: fruits.slice(2, 3) });

//concat
var boys = ["ali", "veli"];
var girls = ["ayse", "fatma", "hayriye"];
console.log({ boys, girls, concat: boys.concat(girls) });

fruits.sort();
console.log({ sort1: { ...fruits } });

//küçükten büyüğe
numbers.sort(function (a, b) {
  return a - b;
});
console.log({ sort2: { ...numbers } });

/*bütükten küçüğe
numbers.sort(function (a, b){
    return b-a;
})
console.log({"sort3":{...numbers}});*/

numbers.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log({ sort4: { ...numbers } });

//random numbers
console.log(Math.random()); //random 0-1 decimal
console.log(Math.random() * 10); //random 0-10 decimal numbers
console.log(parseInt(Math.random() * 10)); //random 0-10 integer
console.log( parseInt( 5+Math.random() *10) ); //random 5-15 integer

//date
//new Date()
//new Date(year, month, day, hours, minutes, seconds, miliseconds)
//new Date(miliseconds)
//new Date(date string)

//QUIZ OLABILIR
var today = new Date();
console.log({today});
console.log({"a date": new Date("Fri Apr 21 2023 10:10:54 GMT+0300")})
console.log({"tiny mistake date": new Date("Wed Apr 21 2023 10:10:54+GMT+0300")})
console.log({"completely wrong date": new Date("not a date")});

console.log("toString: ",today.toString());
console.log("toDateString: ", today.toDateString());
console.log("toTimeString: ", today.toTimeString());
console.log("toISOString: ", today.toISOString());
console.log("toUTCString: ", today.toUTCString());

//3 dakikalık video research yaptığımız, zoom kullan.