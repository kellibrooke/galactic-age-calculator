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
    this.lifeExpectancy = 79;
  }

  convertToSeconds(date) {
    const seconds = Math.floor((date.getTime())/1000);
    return seconds;
  }

  findSecondsBetweenDates() {
    const birthDateSeconds = this.convertToSeconds(this.birthDate);
    const todaySeconds = this.convertToSeconds(this.today);
    const difference = todaySeconds - birthDateSeconds;
    return difference;
  }

  findEarthAge() {
    const earthAge = Math.floor(this.findSecondsBetweenDates()/31536000);
    return earthAge;
  }

  findMercuryAge() {
    const mercuryAge = Math.floor(this.findSecondsBetweenDates()/7568640);
    return mercuryAge;
  }

  findVenusAge() {
    const venusAge = Math.floor(this.findSecondsBetweenDates()/19552320);
    return venusAge;
  }

  findMarsAge() {
    const marsAge = Math.floor(this.findSecondsBetweenDates()/59287680);
    return marsAge;
  }

  findJupiterAge() {
    const jupiterAge = Math.floor(this.findSecondsBetweenDates()/374016960);
    return jupiterAge;
  }

  findEarthYearsLeft() {
    const age = this.findEarthAge();
    const yearsLeft = Math.abs(this.lifeExpectancy - age);
    return yearsLeft;
  }

  shouldBeDead() {
    const yearsLeft = this.lifeExpectancy - this.findEarthAge()
    if (yearsLeft < 0) {
      return true;
    } else if (yearsLeft > 0) {
      return false;
    }
  }

  findMercuryYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const mercuryYearsLeft = Math.floor(earthYearsLeft/.24);
    return mercuryYearsLeft;
  }

  findVenusYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const venusYearsLeft = Math.floor(earthYearsLeft/.62);
    return venusYearsLeft;
  }

  findMarsYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const marsYearsLeft = Math.floor(earthYearsLeft/1.88);
    return marsYearsLeft;
  }

  findJupiterYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const jupiterYearsLeft = Math.floor(earthYearsLeft/11.86);
    return jupiterYearsLeft;
  }
}
