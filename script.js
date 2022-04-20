
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

// დავალება მესამე

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
