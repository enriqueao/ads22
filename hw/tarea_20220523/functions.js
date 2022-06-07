const someOperations = {
  isPair: function isPair(a) {
    return a % 2 === 0;
  },
  arrayIsPaired: function arrayIsPaired(a) {
    return a.every(someOperations.isPair);
  },
  stringLength: function stringLength(a) {
    return a.length;
  },
  dayOfWeek: function dayOfWeek(a) {
    daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return daysOfTheWeek[a];
  },
  currenTime: function currenTime() {
    return new Date().getHours();
  },
  orderNumbersOfArray: function orderNumbersOfArray(a) {
    return a.sort((a, b) => a - b);
  },
  upcaseWord: function upcaseWord(a) {
    return a.toUpperCase();
  }
}
 module.exports = someOperations