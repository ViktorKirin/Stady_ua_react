// 'use strict'

// Задание №1 используя деструктуризацию добавить имена из массива usersNames в объект users

let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};

[users.mike, users.bob, users.nikola] = usersNames
console.log(users)


// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');

// console.log(user.name); // Ilya
// console.log(user.surname); // Kantor



// Задание №2 существует объект с ЗП пользователей, создать функцию maxSalary(salaries) -которая возвратит max ЗП 

let salaries = {
    'Mike': 1500,
    'Bob': 1800,
    'Nikola': 1700,
};
function maxSalary (salaries) {

    let max = 0;
    let maxName;

//используем деструктуризацию для присвоения значения имени и Зп из объекта salaries name - ключ, value - значение.. Object.entries - значение и ключ возвращает в массиве [key, value]

    for (let [name, value] of Object.entries(salaries)) {
        // console.log(`${name}:${value}`);
            if(max < value) {
                max = value;
                maxName = name;
            }
      }
      return console.log(`${maxName} - ${max}$`)
}

maxSalary (salaries)


// Задание №3 существует объект userS, используя деструктуризацию создать переменные userMike userBob userNikola

// console.log(userMike, userBob, userNikola);

let newUsers = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'};
  
let {mike: userMike, bob: userBob, nikola: userNikola} = newUsers
  
  console.log(userMike); 
  console.log(userBob);  
  console.log(userNikola); 