/* ---------------------------DICE ROLLER PROGRAM-------------------------
const min = 1;
const max = 6;
function rollDice(){
    const numOfDice = document.getElementById("myInput").value;
    const result = document.getElementById("Diceresult");
    const diceima = document.getElementById("Dice_images");
    const values = [];
    const images = [];

    for(let i = 0;i<numOfDice;i++){
        const a = Math.floor(Math.random() * max) + min;
        values.push(a);
        images.push(`<img src = "dice.images/d${a}.png">`);
    }
    result.textContent = `Dice: ${values.join(', ')}`;
    diceima.innerHTML = images;
-----------------------------------------------------------------------*/
/* 
function generatePassword(passwordLength,allowLowerCase,allowUpperCase,allowNumbers,allowSymbols){
    let allowedChars = "";
    let password = "";
    
        allowedChars += allowLowerCase?'abcdefghijklmnopqrstuvwxyz':"";
        allowedChars +=allowUpperCase?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':"";
        allowedChars += allowNumbers?'1234567890':"";
        allowedChars += allowSymbols?'~!@#$%^&*()':"";

        console.log(allowedChars);
    

    if(allowedChars.passwordLength < 0){
        console.log(`Please select atleast one of the properties to be true`);
    }

    for(let i = 0;i<passwordLength;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length) + 1;
        password += allowedChars[randomIndex];
    }
    return password;
}

let passwordLength = 12;
let allowLowerCase = true;
let allowUpperCase = true;
let allowNumbers = true;
let allowSymbols = true;

const ans  = generatePassword(passwordLength,allowLowerCase,allowUpperCase,allowNumbers,allowSymbols);
console.log(ans);
---------------------------------------------CALL BACK-------------------------------------------------------- */
/* function hello(callback){
    console.log("hell0");
    callback();
}

function goodbye(){
    console.log("GoodBye");
}

hello(goodbye);


function sum(callback,x,y){
    let result = x + y;
    callback(result);
}
function display(result){
    console.log(result);
}

function DisplayPage(result){
    document.getElementById("myH1").textContent = result;
}
sum(DisplayPage,1,2);
--------------------------------ForEach------------------------------------*/
/* let fruits = ["apple","oranges","mangoes"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}
function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}
function capitalize(element,index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element){
    console.log(element);
}
-------------------------------------MAP----------------------------------*/
/*
const numbers = [1,2,3,4,5];
let a = numbers.map(poww);
console.log(a);

function poww(element){
    return Math.pow(element,2);
}

const dates = ["2024-1-10","2024-3-30","2024-12-25"];
let ans = dates.map(formatDates);
console.log(ans);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/ ${parts[0]}`; 
}

---------------------------------------Filter------------------------------*/
/*
let numbers = [1,2,3,4,5,6,7,8];
console.log(numbers.filter(isEven));
let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}


const ages = [16,17,17,18,18,60];
const filAges = ages.filter(isChild);
console.log(filAges);
console.log(ages);

function isAdult(element){
    return element >=   18;
}
function isChild(element){
    return element <   18;
}
-----------------------------------REDUCE-------------------------------------*/
/*let numbers = [60,90,95,45,49,55];
console.log(numbers.reduce(sum));

function sum(prev,next){
    return prev + next;
}
console.log(numbers.reduce(maxx));
function maxx(prev,next){
    return Math.max(prev,next);
}
-----------------------------------FUNCTION EXPRESSION-------------------------------*/
/*
setTimeout(function(){
    console.log("Hi");
},3000)

let numbers = [1,2,3,4,5,6];
const ans = numbers.map(function(element){
    return Math.pow(element,2);
});
console.log(ans);

const ans1 = numbers.map(function(element){
    return Math.pow(element,3);
});
console.log(ans1)

const ans3 = numbers.filter(function(element){
    return element % 2 == 0;
});
console.log(ans3)

const total = numbers.reduce(function(prev,next){
    return prev + next;
});
console.log(total)
--------------------------------------ARROW FUNCTIONS------------------------------*/
/* const h1 = () => console.log("fuckk u");
h1()

const hello = (name,age) => {console.log(`Hello ${name}`)
                             console.log(`You are ${age} years old`)};

hello("Bro",21);

setTimeout(() => console.log("HI,Im Tej"),3000);

const numbers = [1,2,3,4,5,6];
const ans = numbers.map((element) => Math.pow(element,2));
const ans1 = numbers.filter((element) => element % 2 === 0);
const ans2 = numbers.reduce((prev,next) => prev + next);

console.log(ans);
console.log(ans1);
console.log(ans2); 
-------------------------------------OBJECTS-----------------------------------*/
/*const person1 = {
    firstName: "Manikanta",
    lastName: "Tej",
    age: 20,
    isStudent: true,
    sayHello: () => console.log("Hi I'm Tej")
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.sayHello();

const person2 = {
    firstName: "Vijay",
    lastName: "Sreekar",
    age: 24,
    isStudent: false,
}
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isStudent);
-----------------------------THIS-----------------------------------------*/
/*const person1 = {
    name: "Manikanta",
    favFood: "Biryani",
    age:20,
    sayHello: function(){ console.log(`My favorite food is ${this.favFood}`)},
    sayhi: function() {console.log(`${this.name}'s Age is ${this.age}`)},
}

const person2 = {
    name: "Vijay",
    favFood: "Fried Rice",
    age:24,
    sayHello: function(){ console.log(`My favorite food is ${this.favFood}`)},
    sayhi: function() {console.log(`${this.name}'s Age is ${this.age}`)},
}
person1.sayhi();
person2.sayhi(); 
-----------------------------------CONSTRUCTOR--------------------------------*/
/*function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.car = year;
    this.color = color;
    this.drive = function(){console.log(`your drive the ${model}`)};
}

const car1 = new  Car("VolksWagen","Polo",2010,"Black");
const car2 = new Car("Suzuki","Swift",2012,"White");

console.log(car1.make);
console.log(car1.model);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.color);

car1.drive();
car2.drive();
------------------------------CLASS-----------------------------------*/
/*class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    DisplayProduct(){
        console.log(`The Product is ${this.name}`);
        console.log(`The price is $${this.price}`);
    }
    calculatetax(tax){
        return this.price + (this.price * tax);
    }
}

const tax = 0.05;
const p1 = new Product("IPhone 13",100);
const p2 = new Product("Shirts",20);
p1.DisplayProduct();
p2.DisplayProduct();

const ans = p2.calculatetax(tax);
console.log(`This total (with taxes is): $${ans.toFixed(2)}`);
--------------------------------STATIC----------------------------------*/
/*class Mathutil{
    static PI = 3.13;

    static getDiamter(radius){
        return radius * 2;
    }

    static circumference(radius){
        return  2 * this.PI * radius;
    }
}
const n = new Mathutil;
console.log(Mathutil.PI);
console.log(Mathutil.getDiamter(10));
console.log(Mathutil.circumference(10)); 


class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are: ${User.userCount} users online`);
    }
    sayhello(){
        console.log(`Hello ${this.username}`);
    }
}

const u1 = new User("Manikanta");
const u2 = new User("vijay");
const u3 = new User("Uma");

u1.sayhello();
u2.sayhello();
u3.sayhello();

User.getUserCount();
---------------------------------INHERITANCE------------------------------------*/
/*class Animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabit";
}
class Fish extends Animal{
    name = "Fish";
}
class Dog extends Animal{
    name = "Dog";
}

const rabbit = new Rabbit();
const dog = new Dog();
const fish = new Fish();

rabbit.eat();
fish.eat();
dog.sleep();
console.log(rabbit.alive);
--------------------------------------SUPER-------------------------------*/
/* class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} can fly at ${speed}mph`);
    }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed
    }
    run(){
        console.log("The rabbit can run")
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swi,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const r = new Rabbit("RABBI",18,10);
const f = new Fish('Nemo',2,12);
const h = new Hawk('Eagle',6,50);

console.log(r.name);
console.log(f.age);
console.log(h.flySpeed);
r.run();
---------------------------GETTERS AND SETTERS---------------------------*/
/*
class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; 
        }
        else{
            console.log("Please enter a valid value");
        }
    }
    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.log("Please enter a valid height");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

}

const r1 = new Rectangle(-4,-3);
console.log(r1.width);
console.log(r1.height);
*/

/*
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    set name(newName){
        if(typeof(newName) === "string" && newName.length > 0){
            this._name = newName;
        }
        else{
            console.error("Please Enter a valid data");
        }
    }
    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Enter a valid age");
        }
    }
    get age(){
        return this._age;
    }
    get name(){
        return this._name;
    }
}
const p1 = new Person("Manikanta",21);
console.log(p1.name);
console.log(p1.age);

-----------------------------------DESTRUCTURING------------------------------- */
/* Array Destructuring
let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);
// Swapping two values of two variables

let fruits = ["Orange","Mangoes","Banana","Kiwi","Apple"];

const[first,seond,third, ...remaining] = fruits;
console.log(first);
console.log(seond);
console.log(third);
console.log(remaining);


console.log(fruits); */
/*
function displayFunction({firstName,lastName,age,job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const person1 = {
    firstName: "Manikanta",
    lastName: "Tej",
    age: 20,
}
const person2 = {
    firstName: "Vijay",
    lastName: "Srikar",
    age: 23,
    job: "IT Specialist",
}

displayFunction(person1);
const {firstName,lastName,age,job="Unemployed"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
--------------------------NESTED OBJECTS-------------------------------------*/
/*const person = {
    name:"Manikanta",
    age:20,
    isStudent: true,
    hobbies: ["Cricket","Netflix","Games"],
    address: {
        street: "HB colony",
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
    }
}
console.log(person.hobbies[1]);
console.log(person.address.street);
console.log(person.address.state); */
/*
class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

const person1 = new Person("Manikanta",20,"Hb Colony","Visakhapatnam","India");
const person2 = new Person("Vishnu",20,"Ali puram","Visakhapatnam","India");

console.log(person1.address.street);
-------------------------------ARRAY OF OBECJTS---------------------------------*/
/*let fruits = [{name:"Apple", color:"red",calories:121},
              {name:"Orange",color:"orange",calories:111},
              {name:"Mango",color:"Yellow",calories:151},
              {name:"banana",color:"Light yellow",calories:194},
              {name:"grapes",color:"Purple",calories:200}]

console.log(fruits[0]);
console.log(fruits[3].color);

fruits.forEach((element) => console.log(element));

const col = fruits.map(fruit => fruit.color);
const nam = fruits.map(fruit => fruit.name);

console.log(col);
console.log(nam);

const newArr = fruits.filter(function(element){
    return element.color === "orange";
})
console.log(newArr)

-----------------------------------SORT------------------------------------*/
/*let numbers = [1,10,2,3,4,5,6,7,8];
numbers.sort((a,b) => b-a);
console.log(numbers);

const arr = [{name:"Tej",gpa:7.9},{name:"Darshan",gpa:7.6},{name:"harsha",gpa:.9},{name:"Manmadha",gpa:6.0}];
arr.sort((a,b) => b.gpa - a.gpa);
console.log(arr);
---------------------------------------DATE--------------------------------*/
/*const date = new Date();
console.log(date);

const data = new Date("2024-06-10");
console.log(data);

const day = data.getDay();
console.log(day);

const year = data.getFullYear();
console.log(year); 

const month = data.getMonth();
console.log(month); */
/*
const date = new Date();
date.setFullYear(2004);
date.setDate(3);
date.setMonth(0);
console.log(date);

const date1 = new Date("2024-01-04");
const date2 = new Date("2023-01-04");

console.log(date1);
console.log(date2);
if(date1 > date2){
    console.log(`date 1 is larger`);
}
else{
    console.log(`date 2 is larger`);
}
-------------------------------Closure------------------------------------*/
/*function outer(){
    let message = "Hello";
        function inner(){
            console.log(message);
        }
        inner();
}
outer(); */
/*
function outer(){
    let count = 0;
    function incrementCount(){
        count++;
        console.log(`The count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {incrementCount,getCount};
}

const ans = outer();
ans.incrementCount();
ans.incrementCount();
ans.incrementCount();
console.log(ans.getCount()); */
/*
function outer(){
    let score = 0;
function increaseScore(points){
    score += points;
    console.log(`+${points}pts`)
}
function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`)
}
function getScore(){
    return score;
}
return{increaseScore,decreaseScore,getScore}
}

const ans = outer();
ans.increaseScore(2);
ans.increaseScore(10);
ans.decreaseScore(3);
console.log(ans.getScore());
-----------------------------setTimeout()-----------------------------------*/
/*function hello(){
    window.alert("Hello");
}
//setTimeout(hello,3000);
//setTimeout(function (){
//    window.alert("how are you");
//},3000);

setTimeout(() => window.prompt("PLease enter your age"),3000); */
// CREATING A BUTTON WITH SETTIMTOUT TO DISPLAY THE MESSAGE HELLO AFTER 3 SECONDS
/*
function startTime(){
    let timeoutId = setTimeout(() => window.alert("hello"),3000);
    console.log("STARTED");
}
function clearTime(timeoutId){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
---------------------------------CLOCK PROJECT---------------------------------*/
/*function updateClock(){
    const time = new Date();
    const hours = time.getHours().toString().padStart(2,0);
    const min = time.getMinutes().toString().padStart(2,0);
    const sec = time.getSeconds().toString().padStart(2,0);

    const Tstring = `${hours}:${min}:${sec}`;
    document.getElementById("clock").textContent = Tstring
}

updateClock();
setInterval(updateClock,1000); 
----------------------------STOP-WATCH-----------------------------------------------*/
const content = document.getElementById("myh");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning  = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}
function stopp(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning  = false;
    content.textContent = "00:00:00:00"
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000/10);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    milliseconds = String(milliseconds).padStart(2,0);

    content.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}






