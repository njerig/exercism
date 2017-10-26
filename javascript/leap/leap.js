//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
    this.year = year;
};

Year.prototype.isDivisibleBy = function(n) {
    return this.year % n == 0;
};

Year.prototype.isLeap = function(input) {
    return this.isDivisibleBy(400) || (this.isDivisibleBy(4) && !this.isDivisibleBy(100));
};

module.exports = Year;
