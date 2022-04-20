
// პირველი დავალება
let  user1 = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
   studentstatus: 'active'
  };
  
  console.log(user1.studentstatus);

//   მეორე დავალება
let catNames = ['Snowball', 'Fluffy', 'Luna']

for (let x = 0; x < catNames.length; x++) {
    console.log(catNames[x]);
}

for (let x of catNames) {
    console.log(x);
}

let y = 0;
while (y < catNames.length){
    console.log(catNames[y]);
    y++;
}

// მესამე დავალება

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] > 5) {
        console.log(numbers[x]);
    }
}

// მეოთხე დავალება
let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (user.age < 18 && user.studentstatus == 'active') {
    console.log('hello')
} else if (user.name == 'giorgi') {
    console.log('Hello ' + user.name)
} else if (user.studentstatus == 'active' || user.age < 25) {
    console.log('Hello World')
} else {
    console.log('error')
}

// მეხუთე დავალება
let array1 = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for (let i of array1) {
    if(typeof i == 'string') {
        console.log(i)
    }
}

// მეექვსე დავალება
let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2[i].length; j++) {
        if (array2[i][j] > 0) {
            console.log(array2[i][j])
        }
    }
}

// მეშვიდე დავალება
let array3 = [32, 10, 'hello', null, 'hello2', 50 ]

for (let i of array3) {
    if(typeof i == 'number' && i % 5 == 0) {
        console.log(i)
    }
}
