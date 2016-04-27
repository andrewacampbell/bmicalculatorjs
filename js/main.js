
function calculateBMI() {
    
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    
    var heightInMeter = height/100;
    var weightInMeter = weight/100;
    
    var yourBMI = weight/(heightInMeter*heightInMeter);
    
    
    //outputing bmi
    
}