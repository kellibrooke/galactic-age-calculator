export class Calculator {
  constructor(birthDay, birthMonth, birthYear) {
    this.birthday = new Date();
    this.birthday.setFullYear(birthYear, birthMonth, birthDay);
  }


}
