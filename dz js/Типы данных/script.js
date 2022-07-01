
//Здесь пробовали использовать переменные let и var до объявления
// console.log(user);
// console.log(city);
//
// var city = "Kyiv";
// console.log(city);

let oneMoreKey = "color";
let user = {
    name: "CatInHat",
    age: 13,
    "food type": "meat",
    [oneMoreKey]: "black",
};

let key = "name";
console.log(user[key]);

user.town;
console.log(user.town);

//Выводили переменные внутри строки
// let summary = `Lets make string with variables! User ${user.name} is ${user.age} years old`;
// alert(summary);

//Учились обращаться к свойствам
// console.log(user.name);
// console.log(typeof user.name);
// console.log(user["name"]);
// console.log(typeof user["name"]);

let userBot = user;
let userMore = Object.assign({}, user);

user.favoriteSpot = {
    day: "kitchen",
    night: "bed",
};

console.log(user);
console.log(userBot);
console.log(userMore);

console.log('Проверяем значение свойства age у объекта user');
console.log(user.age);
console.log('Меняем значение age=35');
user.age = 35;
console.log('Значение user.age');
console.log(user.age);
console.log('Значение userBot.age');
console.log(userBot.age);
console.log('Значение userMore.age');
console.log(userMore.age);

// user = null;
// console.log(userBot);
// console.log(user);

// delete user['name'];
// console.log(user['name']);
// console.log(user);
