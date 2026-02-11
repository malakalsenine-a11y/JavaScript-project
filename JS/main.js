


var userEmail = prompt("Enter your email:");
var userPassword = prompt("Enter your password:");
var number_of_tries=0
while (userEmail != "malak" || userPassword != "24"){
    number_of_tries++

    if(number_of_tries < 3){
        userEmail= prompt("Enter Email");
        userPassword= prompt("Enter Password");
    }

    else{
        alert("you tried to many times")
        break
    }
}

if (userEmail == "malak" && userPassword == "24"){
    alert("successfully logged in ")
    var number_of_questions= +prompt("please enter your number of questions")
    var operators =["+", "-", "*", "/"]
    var score= 0;

}
for (var i= 1; i<= number_of_questions; i++){

    var num1 = Math.floor(Math.random() * 10)
    var num2 = Math.floor(Math.random() * 10)

    var operation = operators[Math.floor(Math.random() * operators.length)]
    var userAnswer = prompt(`${i}. ${num1} ${operation} ${num2} = `)


    var correctAnswer;

if(operation === "+"){
    correctAnswer = num1 + num2;
}
else if(operation === "-"){
    correctAnswer = num1 - num2;
}
else if(operation === "*"){
    correctAnswer = num1 * num2;
}
else if(operation === "/"){
    correctAnswer = num1 / num2;
}

if(userAnswer == correctAnswer){
    score++;   
}

}

alert("Your final score = " + score + " out of " + number_of_questions);
