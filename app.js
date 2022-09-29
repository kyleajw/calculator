const buttons = document.querySelectorAll("button");
const sum = document.querySelector(".sum");
const clearBtn = document.querySelector(".clear");


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // console.log(`clicked ${button.value}`);
        if (button.value === '=') {
            try {
                calculate(sum.textContent);
            }
            catch {
                sum.textContent = 'ERR';
            }

        } else if (button.value === 'AC') {
            clearSum();
        } else if (button.value === '+/-') {
            inverseSum();
        } else if (button.value === '%') {

        }
        else {
            appendDisplay(button.value);
        }

        if (sum.textContent === '0') {
            clearBtn.textContent = 'AC';
        }
    });
});


function clearSum() {
    sum.textContent = '0';
    clearBtn.textContent = 'AC';
}

function appendDisplay(num) {
    if (sum.textContent === '0' || sum.textContent === 'ERR' || sum.textContent === 'Infinity' || sum.textContent === 'NaN') {
        sum.textContent = num;
        clearBtn.textContent = 'C';
    }
    else {
        sum.textContent += num;
    }
}

function calculate(equation) {
    // console.log(eval(equation));
    sum.textContent = eval(equation);
}

function inverseSum() {
    try {
        if (parseFloat(sum.textContent) >= 0) {
            sum.textContent = -parseFloat(sum.textContent);
        }
        else {
            sum.textContent = Math.abs(parseFloat(sum.textContent));
        }
    }
    catch {
        sum.textContent = 'ERR';
    }

}