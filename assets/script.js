let yourName = "Ramiro Peña"


// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let addGbBtn = document.getElementById("add-gb")
let decreaseGbBtn = document.getElementById("minus-gb")

let addCcBtn = document.getElementById("add-cc")
let decreaseCcBtn = document.getElementById("minus-cc")

let addSugarBtn = document.getElementById("add-sugar")
let decreaseSugarBtn = document.getElementById("minus-sugar")

let totalVotesTd = document.querySelector('#qty-total');
totalVotesTd.textContent = gb + cc + sugar;

 
document.getElementById('credit').textContent = `Created by ${'Ramiro Peña'}`




// Gingerbread add + subtract buttons
document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb +1;
    console.log('gb');
    document.querySelector('#qty-gb').textContent = gb;
    totalVotesTd.textContent = gb + cc + sugar;
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb -1;
    console.log('gb');
    document.querySelector('#qty-gb').textContent = gb;
    totalVotesTd.textContent = gb + cc + sugar;
})



// chocolate chip add + subtract buttons
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc +1;
    console.log('cc');
    document.querySelector('#qty-cc').textContent = cc;
    totalVotesTd.textContent = gb + cc + sugar;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc -1;
    console.log('cc');
    document.querySelector('#qty-cc').textContent = cc;
    totalVotesTd.textContent = gb + cc + sugar;
})


// Sugar Sprinkle add + subtract buttons
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar +1;
    console.log('sugar');
    document.querySelector('#qty-sugar').textContent = sugar;
    totalVotesTd.textContent = gb + cc + sugar;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar -1;
    console.log('sugar');
    document.querySelector('#qty-sugar').textContent = sugar;
    totalVotesTd.textContent = gb + cc + sugar;
})

// TODO: Hook up event listeners for the rest of the buttons