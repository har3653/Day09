function myDoWhile() {
  var myNumbers = "0";
  var i = 1;
  do {
    myNumbers += ", " + i;
    i++;
  } while (i <= 9);
  return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;
