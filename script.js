//v.0.1 development
// calculator made with vanilla.js
// date: 12.04.2019

const main = document.querySelector('.main');
const calculator = document.querySelector('.calculator');
const result = document.querySelector('#result');

let opClicked = false;

const values = {
    'first': '',
    'operation': '',
    'second': '',
    'calculated': false
};

calculator.addEventListener('click', (e) => {
    e.preventDefault();
    let res = e.target.textContent;
    console.log(res);

    if ((res == '+') || (res == '-') || (res == '/') || (res == '*') || (res == '=')) {
        if ((res != '=')) {
            opClicked = true;
            result.value = res;
            values.operation = res;

            if (values.calculated == true) {
                values.first = res;
            }
            
        } else {
            result.value = calcResults();
            values.first = '';
            values.operation = '';
            values.second = '';
            values.calculated = true;
            opClicked = false;
        }

    } else if (!opClicked) {
        values.first += res;
        result.value = values.first;
    } else {
        values.second += res;
        result.value = values.second;
    }

    function calcResults() {
        if (res == '=') {
            let sum = 0;
            if (values.operation == '+') {
                sum = Number(values.first) + Number(values.second);
            } else if (values.operation == '-') {
                sum = Number(values.first) - Number(values.second);
            } else if (values.operation == '/') {
                sum = Number(values.first) / Number(values.second);
            } else if (values.operation == '*') {
                sum = Number(values.first) * Number(values.second);
            }
            console.log(sum);

            return sum;
        }
    }

});