const userInput = document.querySelector('#hex');
const binary = document.querySelector('#binary');
const decimal = document.querySelector('.decimal');
const hexSubmit = document.querySelector('#forhex')
const binaSubmit = document.querySelector('#forbina');
const answer = document.querySelector('.conde');
const overlay = document.querySelector('.overlay');

//colors selectors
const body = document.querySelector('body');
const p = document.querySelector('.p');
const h1 = document.querySelector('h1');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');
const color4 = document.querySelector('.color-4');
const color5 = document.querySelector('.color-5');

// Re-usable function that reverses a string
function reverseArr(input) {
    var ret = new Array;
    for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

const rmHidden = function () {
    overlay.classList.remove('hidden');
    answer.classList.remove('hidden');
}
const addHidden = function () {
    overlay.classList.add('hidden');
    answer.classList.add('hidden');
}
// let array = 'da21'

// function that converts hexadecimal to decimal
const hexa = function (users) {
    let result = 0;
    reverseArr(users).forEach((item, index) => {
        if (item == 'F') {
            item = 15;
        } else if (item == 'A') {
            item = 10;
        } else if (item == 'D') {
            item = 13;
        } else if (item == 'E') {
            item = 14;
        } else if (item == 'B') {
            item = 11;
        } else if (item == 'C') {
            item = 12;
        }
        result += item * Math.pow(16, index);
    })
    return result;
}


hexSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    rmHidden();
    decimal.value = hexa(userInput.value.toUpperCase());
});

// adds hidden to overlay and answer
overlay.addEventListener('click', () => {
    addHidden();
})


//function that converts binary to decimal
const bina = function (user) {
    let total = 0;
    reverseArr(user).forEach((item, index) => {
        if (item < 2 && item > -2) {
            total += item * Math.pow(2, index);
        } else {
            total = 'invalid number';
        }
    })
    return total;
}

binaSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    rmHidden();
    decimal.value = bina(binary.value);
})


//body color changing
color1.addEventListener('click', () => {
    body.style.background = '#7f7f02';
    body.style.backgroundAttachment = 'fixed';
})

color2.addEventListener('click', () => {
    body.style.background = '#075761';
    body.style.backgroundAttachment = 'fixed';
    p.style.color = '#f4f4f4';
})

color3.addEventListener('click', () => {
    body.style.background = '#185804';
    body.style.backgroundAttachment = 'fixed';
    p.style.color = '#f4f4f4';
})

color4.addEventListener('click', () => {
    body.style.background = '#051d2b';
    body.style.backgroundAttachment = 'fixed';
    p.style.color = '#f4f4f4';
})

color5.addEventListener('click', () => {
    body.style.background = '#000000';
    body.style.backgroundAttachment = 'fixed';
})