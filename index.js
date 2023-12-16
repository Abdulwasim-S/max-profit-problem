// Function to calculate earnings and right mix
function calculate() {
  try {
    //Clearing previous values to calculate using new time unit
    arr = new Array(3).fill(0);
    timeUnit = [4, 5, 10];

    //Getting time unit
    let n = document.getElementById("timeUnit").value;

    //Input validation
    if (isNaN(n) || n <= 0) {
      warning.innerHTML =
        "*Please enter a valid positive number for time unit.";
      return;
    }
    warning.innerHTML = "";
    let max_earnings = findMaxEarning(n);
    let solution = `T: ${arr[1]}  P: ${arr[0]}  C: ${arr[2]}`;

    //To add result into HTML
    result.innerHTML = `Time Unit : ${n}<br/>
  Earnings : $ ${max_earnings}<br/>
  Solution : ${solution}`;
  } catch (error) {
    console.log(error);
  }
}

//To find max earning
function findMaxEarning(n) {
  try {
    let earning = 0;
    let earningArray = new Array(3).fill(0);

    //Condition to check the value is greaterthan 4
    if (n < 4) {
      return 0;
    } else {
      //To calculate earning on each recursive call
      let temp = n - 4;
      earningArray[0] = temp * 1000;
      if (n >= 5) {
        temp = n - 5;
        earningArray[1] = temp * 1500;
        if (n >= 10) {
          temp = n - 10;
          earningArray[2] = temp * 3000;
        }
      }
    }

    //Max-th index and sum of the earings
    let max_index = getMax(earningArray);
    earning += earningArray[max_index];
    arr[max_index]++;

    //Recursion untill 'n' become '0'
    return earning + findMaxEarning(n - timeUnit[max_index]);
  } catch (error) {
    console.log(error);
  }
}
function getMax(earningArray) {
  try {
    // To find the max earning in the earning array
    if (earningArray[0] >= earningArray[1]) {
      if (earningArray[0] >= earningArray[2]) {
        return 0;
      } else {
        return 2;
      }
    } else if (earningArray[1] >= earningArray[2]) {
      return 1;
    } else {
      return 2;
    }
  } catch (error) {
    console.log(error);
  }
}
//Inital Set-up for calculation and output
let arr = new Array(3).fill(0);
let timeUnit = [4, 5, 10];
let result = document.getElementById("solutions");
let warning = document.getElementById("warning");
