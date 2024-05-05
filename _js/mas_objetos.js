var taco1 = {
    "tortilla": "tortilla suave de maíz",
    "protein":  "tinga de pollo",
    "cheese":   "queso cotija",
    "toppings": ["lechuga", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein:  " + taco1.protein);
        console.log("Cheese:   " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
    }
}
    
// ahora podemos obtener toda la deliciosa información de taco de
taco1.tacoInfo(); // nota que llamamos esto como a una función porque es una función





function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);