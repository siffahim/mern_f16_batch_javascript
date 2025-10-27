// 80–100 marks:  (A+) 
// 70–79 marks:  (A)
// 60–69 marks:  (A-) 
// 50–59 marks:  (B) 
// 40–49 marks:  (C) 
// 33–39 marks:  (D)

// var x = prompt("Give the value of x: ");
// var y = prompt("Give the value of y: ")

// var sum = x + y;

// document.write("<br/>" + x);
// document.write("<br/>" + y);
// document.write("<br/> Sum: " + sum);

var mark = prompt("Write yuour mark: ");

if(mark >= 80 && mark <=100){
    document.write("You got A+");
}
else if(mark >= 70 && mark < 80){
    document.write("You got A");
}
else if(mark >= 60 && mark < 70){
    document.write("You got A-");
}
else if(mark >= 50 && mark <60){
    document.write("You got B");
}
else if(mark >= 40 && mark <50){
    document.write("You got C");
}
else if(mark >= 33 && mark < 40){
    document.write("You got D");
}
else{
    document.write("You are failed!!!");
}
