/**
 * @fileoverview Validation utils
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const moment = require('moment');
module.exports = {
    isFirstBeforeSecondDate: (first, second) => {
      // isFirstBeforeSecondDate returns true if first date is after second date
        return moment(first, "YYYY-MM-DD", true).isValid() &&
            moment(second, "YYYY-MM-DD", true).isValid() &&
            moment(second).isSameOrAfter(first);
    },
    isIntegerGtEZero: (number) => {
        // isIntegerGtEZero returns true if number >= 0
        return (Number.isInteger(number) && number >= 0);
    },
    isFirstLtESecondNumber: (first, second) => {
        // isFirstLtESecondNumber returns true if first <= second
        return first <= second;
    }
}