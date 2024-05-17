
var hello = 'world';                                 
console.log(hello); 

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

function mean() {
    let food; // Usar let para evitar hoisting confuso
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean(); // Ahora esto funciona porque mean está declarado
console.log(food);

var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

console.log(makeDojo("Chicago", 65)); // true
console.log(makeDojo("Berkeley", 0)); // "closed for now"

function makeDojo(name, students){
    let dojo = {}; // Cambie const a let
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true; // Añadir una propiedad hiring si los estudiantes son más de 50
    } else if(dojo.students <= 0){
        dojo.status = "closed for now"; // Usar una propiedad status en lugar de reasignar dojo
    }
    return dojo;
}
