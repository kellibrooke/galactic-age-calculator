import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#submit").click(function(){
    $("#result").text(($("#bday").val()).toString());
  })
});
