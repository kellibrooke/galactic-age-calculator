import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from './calculator.js';

$(document).ready(function() {
  $("#submit").click(function(){
    const birthDay = parseInt($("#birthDay").val());
    const birthMonth = parseInt($("#birthMonth").val());
    const birthYear = parseInt($("#birthYear").val());
    const newCalculator = new Calculator(birthDay, birthMonth, birthYear);
    const shouldBeDead = newCalculator.shouldBeDead();

    $("#earth-age").text(newCalculator.findEarthAge());
    $("#mercury-age").text(newCalculator.findMercuryAge());
    $("#venus-age").text(newCalculator.findVenusAge());
    $("#mars-age").text(newCalculator.findMarsAge());
    $("#jupiter-age").text(newCalculator.findJupiterAge());

    if(shouldBeDead === "yes") {
      const deadText = "Years You Should Have Been Dead on ";
      $("#earth-years-left").text(deadText + "Earth: " + newCalculator.findEarthYearsLeft());
      $("#mercury-years-left").text(deadText + "Mercury: " + newCalculator.findMercuryYearsLeft());
      $("#venus-years-left").text(deadText + "Venus: " + newCalculator.findVenusYearsLeft());
      $("#mars-years-left").text(deadText + "Mars: " + newCalculator.findMarsYearsLeft());
      $("#jupiter-years-left").text(deadText + "Jupiter: " + newCalculator.findJupiterYearsLeft());
    } else if (shouldBeDead === "no") {
      const aliveText = "Years You Have Left On ";
      $("#earth-years-left").text(aliveText + "Earth: " + newCalculator.findEarthYearsLeft());
      $("#mercury-years-left").text(aliveText + "Mercury: " + newCalculator.findMercuryYearsLeft());
      $("#venus-years-left").text(aliveText + "Venus: " + newCalculator.findVenusYearsLeft());
      $("#mars-years-left").text(aliveText + "Mars: " + newCalculator.findMarsYearsLeft());
      $("#jupiter-years-left").text(aliveText + "Jupiter: " + newCalculator.findJupiterYearsLeft());
    } else if (shouldBeDead === "will die this year") {
      const dieSoonText = "You have reached your life expectancy on ";
      $("#earth-years-left").text(dieSoonText + "Earth. You are probably going to die this year.");
      $("#mercury-years-left").text(dieSoonText + "Mercury. You are probably going to die this year.");
      $("#venus-years-left").text(dieSoonText + "Venus. You are probably going to die this year.");
      $("#mars-years-left").text(dieSoonText + "Mars. You are probably going to die this year.");
      $("#jupiter-years-left").text(dieSoonText + "Jupiter. You are probably going to die this year.");
    }


    $("#results").show();
  });
});
