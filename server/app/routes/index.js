const calculatorRoute = require('./calculator_routes');

module.exports = (app) => {
    calculatorRoute(app);
}