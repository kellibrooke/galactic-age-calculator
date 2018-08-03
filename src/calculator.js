export class Calculator {
  constructor(birthDay, birthMonth, birthYear) {
    this.birthDay = birthDay;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.birthDate = new Date();
    this.birthDate.setFullYear(birthYear, birthMonth, birthDay);
    this.birthDate.setHours(0, 0, 0);
    this.printableBirthDate = this.birthDate.toDateString();
    this.today = new Date();
    this.today.setHours(0, 0, 0);
    this.printableToday = this.today.toDateString();
  }

  convertToSeconds(date) {
    const seconds = (date.getTime())/1000;
    return seconds;
  }

  

}
