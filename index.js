// Write your solution in this file!
// 1. Declare customerName in global scope using var and assign it 'bob'
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Set bestCustomer in global scope (intentional bad practice)
function setBestCustomer() {
    bestCustomer = 'not bob'; // no var/let/const = global
}

// 4. Overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Try to change the constant (should throw error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // will throw error
}
