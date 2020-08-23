var johnHeight, johnWeight;
johnHeight = 1.82;
johnWeight = 78;

var markHeight, markWeight;
markHeight = 1.72;
markWeight = 80;

var johnBMI = johnWeight / (johnHeight * johnHeight);
var markBMI = markWeight / (markHeight * markHeight);

var bool = markBMI > johnBMI;
console.log("Is marks BMI greater than john's?" + bool);