let person = {
    name: "Augustus",
    age: 22,
    height : 5.6,
    residence : "Karatina",
    nationality: "Kenyan"
}

person.name = "Victor"
person.residence = "Githurai"

person.weight = "70Kgs"

// console.log(person);

// let person2 = new Object()

// person2.name = "Ambrose";
// person2.age = 24

// console.log(person.residence);
// console.log(person['nationality']);

let prop = "manufacture"

let car = {
    brand : "Audi",
    color : "Black",
    fuel : "Petrol",
    consumption : "12KM/L",
    model : "Saloon",
    [prop] : 2022
}

delete car.model

// console.log( car );

for(key in car){
    // console.log(key);
}

// console.log(car.brand == undefined);

let newarray = Object.assign({}, person, car)

// console.log(newarray);

let firstname = "Daniel"
let middlename = "hjgfsefge"

let names = ["vic", "ruto", "augustus", "ambrose", "david"]

let filterednames = names.filter((el)=>{
   return  el.length > 4
})

console.log(filterednames);

let names_form = document.querySelector('.name-form')
let newname = document.querySelector('.txtname')

let deletebtn = document.querySelector('.btndelete')

deletebtn.addEventListener('click', ()=>{
    // names.pop()
    // names.shift()
    names.splice(3, 6)
    console.log(names);
})

names_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(names);
    
    // names.push(newname.value)
    names.unshift(newname.value)

    newname.value = ""

    console.log(names);
})
