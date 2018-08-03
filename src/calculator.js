export class Calculator {
  constructor(birthDay, birthMonth, birthYear) {
    this.birthDay = birthDay;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.birthDate = new Date();
    this.birthDate.setFullYear(birthYear, birthMonth, birthDay);
  }


}
