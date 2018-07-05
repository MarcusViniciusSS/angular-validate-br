export class ContactRequest {
  personalData: PersonalData;
  requestType: any;
  text: string;
}

export class PersonalData {
  email: string;
  mobile: string;
  country: string;
}
