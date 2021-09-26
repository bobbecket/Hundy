// Start / Controller function
//
// Get the values from the Page
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // attempt to parse user input values into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("Please enter integers");
    }
}

// Logic functions
//
// Generate numbers from startValue to endValue
function generateNumbers(startValue, endValue) {

    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

// Display / View function
// Display numbers and mark even numbers bold
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if ((number % 2) == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}