function gradeAverage() {
	// body...

	var subA = parseInt(document.getElementById('gradeA').value);
	var subB = parseInt(document.getElementById('gradeB').value);
	var subC = parseInt(document.getElementById('gradeC').value);

	var ave = (subA + subB + subC) /3;

	  // if-else statements
     if (ave >= 70 && ave < 74.99) {
        document.getElementById("demo").innerHTML = "Your grade is " + ave + ", which is poor." 
    } 
    else if (ave>= 75 && ave <= 79.99) {
        document.getElementById("demo").innerHTML = "Your grade is " + ave + ", which needs improvement." 
    }
     else if (ave>= 80 && ave <= 86.99) {
        document.getElementById("demo").innerHTML = "Your grade is " + ave + ", which is satisfactory." 
    }
     else if (ave>= 87 && ave <= 93.99) {
        document.getElementById("demo").innerHTML = "Your grade is " + ave + ", which is above satisfactory!" 
    }
     else if (ave>= 94 && ave <= 100) {
        document.getElementById("demo").innerHTML = "Your grade is " + ave + ", which is excellent!" 
    }
    else {
        document.getElementById('demo').innerHTML = ("Invalid grade. Check your inputs.");
    }
}