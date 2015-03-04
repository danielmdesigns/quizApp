//quiz begins, no answers are correct
var correct = 0;

//ask question
var answer1 = prompt("Name a programming language that's also a gem?");
if ( answer1.toUpperCase() === 'RUBY'){
    correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake?");
if (answer2.toUpperCase() === 'PYTHON'){
    correct += 1;
}
var answer3 = prompt("What language do you style web pages in?");
if (answer3.toUpperCase() === 'CSS' ){
    correct += 1;
}
var answer4 = prompt("What langague would you use to build the structure of the website?");
if(answer4.toUpperCase() === 'HTML' ){
    correct += 1;
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if(answer5.toUpperCase() === 'JAVASCRIPT'){
    correct +=1;
}

//output results
document.write("<p>Score: You got " + correct + " of the 5 questions correct!</p>");

//output rank
if ( correct === 5 ){
    document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if ( correct >= 3){
    document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if( correct >= 1){
    document.write("<p><strong>You earned a bronze crown!</strong></p>");
} else {
    document.write("<p><strong>No crown for you! Continue to Studay.</strong></p>");
}




