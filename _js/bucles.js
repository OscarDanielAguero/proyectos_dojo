for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

const valores = [4, 2.5, 1, -0.5, -2, -3.5];
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("La suma de los números del 1 al 100 es:", sum);


let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log("El producto de los números del 1 al 12 es:", product);
