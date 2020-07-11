/**
 * @fileoverview Validation utils
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const moment = require('moment');
module.exports = {
    isFirstBeforeSecondDate: (first, second) => {
        return moment(first, "YYYY-MM-DD", true).isValid() &&
            moment(second, "YYYY-MM-DD", true).isValid() &&
            moment(second).isSameOrAfter(first);
    },
    isIntegerGtEZero: (number) => {
        return (Number.isInteger(number) && number >= 0);
    },
    isFirstLtESecondNumber: (first, second) => {
        return first <= second;
    }
}