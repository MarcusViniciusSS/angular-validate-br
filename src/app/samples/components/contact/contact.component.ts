import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PersonalData, ContactRequest } from '../../contact-request';
import { ValidateBrService } from 'projects/angular-validate-br/src/public_api';

@Component({
  selector: 'lib-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  countries = ['USA', 'Germany', 'Italy', 'France'];

  requestTypes = ['Claim', 'Feedback', 'Help Request'];


  constructor(private validateBrService: ValidateBrService) {
    this.contactForm = this.createFormGroup();
  }

  // Step 1
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl('', [this.validateBrService.propName]),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.contactForm.get('personalData').get('email'));
    // Make sure to create a deep copy of the form-model
    // const result: ContactRequest = Object.assign({}, this.contactForm.value);
    // result.personalData = Object.assign({}, result.personalData);

    // // Do useful stuff with the gathered data
    // console.log(result);
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({
      personalData: new PersonalData(),
      requestType: '',
      text: ''
    });
  }

  ngOnInit() {}
}
