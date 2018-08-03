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
    $("#result").text(birthYear);
  });
});
