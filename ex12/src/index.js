function switchCaseSequential(num) {
  switch (num) {
    case 1:
    case 2:
    case 3:
      var answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      var answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      var answer = "High";
      break;
  }

  return answer;
}

console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));
module.exports = switchCaseSequential;
