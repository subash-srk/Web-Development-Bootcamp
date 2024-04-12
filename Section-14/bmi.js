function bmiCalculator(weight, height){
    bmi = weight / (height*height);
    return bmi;
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)

