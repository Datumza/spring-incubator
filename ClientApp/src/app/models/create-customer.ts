export class CreateCustomer {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  passportNumber: string;
  email: string;
  phoneNumber: string;


  constructor(id: number, username: string, firstName: string, lastName: string, passportNumber: string, email: string, phoneNumber: string) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.passportNumber = passportNumber;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
