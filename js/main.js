$(document).ready(function() {

    $('#sub').on('click', function() {

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if((height%2)>=1 && (weight%2)>=1) {
      var heightInMeter = height/100;
      var yourBMI = weight/(heightInMeter*heightInMeter);

      var result = "Your BMI is " + yourBMI.toFixed(2);

      if(yourBMI <= 18.5){
          result += "<br/> you are under weight ";

      }else if(yourBMI > 18.5 && yourBMI <= 24.9){

            result += "<br/> you are normal weight perfect!";

      }else if(yourBMI > 24.9 && yourBMI <= 29.9){

            result += "<br/> you are overweight watch yourself";

      }else {

            result += "<br/> you are obese be careful!!";
      }

      document.getElementById("success").innerHTML = result;

      $(".alert").fadeIn("slow");

    }else {

      alert("Please enter a number");

    }

    });
});

function calcuateBMI() {

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var heightInMeter = height/100;
    var weightInMeter = weight/100;

    var yourBMI = weight/(heightInMeter*heightInMeter);


    //outputing bmi
    document.getElementById("output").innerHTML = "Your BMI is " + yourBMI.toFixed(2);
}
