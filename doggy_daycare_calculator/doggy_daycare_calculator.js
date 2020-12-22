function calcRate() {
var rateResult = 0.00;
var numDogs = 0;
var numHours = 0.00;
var numDogs = parseInt('Enter number of dogs: ');
var numDogs = document.getElementById("inputDogs").value;
var numHours = parseFloat('Enter number of hours at daycare needed: ');
var numHours = document.getElementById("inputHours").value;
//Comparisons Start, then call/invoke Rate
    if (numHours <= 2) {                                   //hourly
        return hourlyRate(numHours, numDogs) 
    } else if (numHours >=1 && numHours <= 5) {            //Half Day Rate 
        return halfDayRate(numDogs)
    } else if (numHours >= 5.01 && numHours <= 11.00) {    //Full Day Rate 
        return fullDayRate(numDogs)
    } else if (numHours >= 11.01) {                        //Hours Exceeded 11
        return exceededHours(numHours)
    }
};

//Returns Hourly Rate
function hourlyRate(numHours, numDogs) {
    var hourlyRate = parseFloat(numHours * numDogs * 7);
    let showResult1 = document.getElementById("showResult").innerHTML = parseFloat(hourlyRate).toFixed(2);
};

//Returns Half Day Rate
function halfDayRate(numDogs) {
  if (numDogs == 1) {
        var halfDayRate1 = '20.00'
        let showResult2 = document.getElementById("showResult").innerHTML = parseFloat(halfDayRate1).toFixed(2);
    } else if (numDogs > 1) {
        var halfDayRate2 = parseFloat(20 + (15 * numDogs) - 15);
        let showResult3 = document.getElementById("showResult").innerHTML = parseFloat(halfDayRate2).toFixed(2);
    }
};

//Returns Full Day Rate
function fullDayRate(numDogs) {
    if (numDogs == 1) {
        var fullDayRate1 = '30.00'
        let showResult4 = document.getElementById("showResult").innerHTML = parseFloat(fullDayRate1).toFixed(2);
    } else if (numDogs > 1) {
        var fullDayRate2 = parseFloat(30 + (25 * numDogs) - 25);
        let showResult5 = document.getElementById("showResult").innerHTML = parseFloat(fullDayRate2).toFixed(2);
    }
};

//Returns Exceeded Hours if over 11 hours max
function exceededHours(numHours) {
    var exceededHours = (numHours + ' hours exceeded the number of daycare hours available. 11 hours is the max daycare hours available. Try again.')
    let showResult6 = document.getElementById("showResult").innerHTML = exceededHours;
};

calcRate()