//object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//object
interface drink {
    color?: string,
    carbonated?: boolean,
    sugar?: number
};

const new_pepsi: drink = {
    color: 'clear',
    carbonated: true,
    sugar: 10
};

const coke: drink = {
    color: 'brown',
    carbonated: true,
    sugar: 0
};
const my_drinks: drink[] = [];
my_drinks.push(coke);
my_drinks.push(new_pepsi);
console.log(my_drinks);
//end of object

//declare new type for tuple structure
type Drink = [string, boolean, number]

//create tuples
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//use this later in course when representing a single row in a csv file

const carSpecs: [number,number] = [400,3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};