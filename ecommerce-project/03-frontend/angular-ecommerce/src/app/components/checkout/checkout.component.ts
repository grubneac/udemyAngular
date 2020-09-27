import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Luv2ShopFormService } from 'src/app/services/luv2-shop-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  constructor(private formBuilder: FormBuilder,
              private luv2ShopForSrevice: Luv2ShopFormService) { }

  ngOnInit(): void {
     this.checkoutFormGroup = this.formBuilder.group({
      customer:  this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        coutry: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        coutry: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });

    //populate credit card months
    const startMonth: number = new Date().getMonth() + 1;
    console.log("start from month: " + startMonth);
    this.luv2ShopForSrevice.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card moths: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );
    
    
    //populate credit card years
    this.luv2ShopForSrevice.getCreditCardYears().subscribe(
        data => {
          console.log("Retrive credit card year: " + JSON.stringify(data));
          
          this.creditCardYears = data;
        }
    )
  }

  onSubmit() {
    console.log("Handling for submit button");
    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("The email adres is " + this.checkoutFormGroup.get('customer').value.email);
  }
  
  copyShippingAdressToBuillingAdress(event){
    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
            .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    } else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
  }

}
