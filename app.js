const userInput = document.querySelector('#hex').value;
const hexSubmit = document.querySelector('.forhex')

function reverseArr(input) {
    var ret = new Array;
    for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}


// let split = array.split();

const reversed = reverseArr(userInput);
let result = 0;
hexSubmit.addEventListener('click', () => {
    reversed.forEach((item, index) => {
        if (!item) {
            alert('input your hex');
        } else {
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
            result += item * Math.pow(16, index)
        }
    })
    alert(result);
    console.log(result);
})



