var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Vasea", "Pecus");
console.log("Customer: " + myCustomer.lastName + " " + myCustomer.firstName);
