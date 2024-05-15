
// let likeCount = 0;

// function incrementCounter() {
//     likeCount++;
//     document.getElementById('likeCounter').innerText = likeCount;
// }

// Array para almacenar los conteos de cada bloque
let likeCounts = [0, 0, 0];

function incrementCounter(index) {
    likeCounts[index]++;
    document.getElementById('likeCounter' + (index + 1)).innerText = likeCounts[index];
}