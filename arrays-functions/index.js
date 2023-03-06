//Question1
//Difference
//Mutating methods are ones that change the array after the method has been used. Non-mutating methods do not change the array after the method has been used.

//Examples of mutating methods
// array.pop()
// array.sort()
// array.shift()
// array.unshift()
// array.push()

//Examples of non-mutating methods
// array.indexOf()
// array.concat()
// array.join()
// array.slice()
// array.toString()


//Question 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.splice(languages.length, 0, 'Kotlin')
console.log(languages)

languages.splice(3, 0, 'Java')
console.log(languages)

languages.splice(0, 1)
console.log(languages)

languages.unshift('Scala', 'Swift')
console.log(languages)

languages.splice(5, 1, 'Go', 'Rust')
console.log(languages)

//Question 3

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
 console.log(changeFruit(fruit))
//['apple', 'mango', 'orange'] //prints out

//Question4
const numbers = [100, 2, 3, 4];
let maximumValue = Math.max(...numbers);
console.log(maximumValue)

//Question5

const arr = [1, 2, 3, 4];

const valTimesIndex = arr.map(x => x * arr.indexOf(x))

console.log(valTimesIndex)