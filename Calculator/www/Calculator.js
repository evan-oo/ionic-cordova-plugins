var exec = require('cordova/exec');
/*
module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Calculator', 'coolMethod', [arg0]);
};

module.exports.addition = function (arg0, success, error) {
    exec(success, error, 'Calculator', 'addition', [arg0]);
};
*/
var calculator = {
    coolMethod: function (arg0, success, error) {
        exec(success, error, 'Calculator', 'coolMethod', [arg0]);
    },

    addition: function (arg0, success, error) {
        exec(success, error, 'Calculator', 'addition', [arg0]);
    },

    PI: 3.14159,
}

module.exports = calculator;