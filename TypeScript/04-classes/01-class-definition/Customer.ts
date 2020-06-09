class Customer{
    firstName: string;
    lastName: string;
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Vasea","Pecus");
console.log(`Customer: ${myCustomer.lastName} ${myCustomer.firstName}`);

