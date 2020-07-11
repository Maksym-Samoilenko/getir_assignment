/**
 * @fileoverview Module is responsible for checking error in request and returns validation errors with 422 code and msg
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const { validationResult } = require('express-validator');
module.exports = {
    validateResult: (req, res, next) => {
        const errorFormatter = ({ msg, param, value }) => {
            return `[${param}:${value}]: ${msg}`;
        };
        const errors = validationResult(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            return res.status(422).json({ code: 422, msg: errors.array() });
        }
        else {
            return next();
        }
    }
}