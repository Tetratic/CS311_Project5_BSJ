function madlib1(){
    
    document.getElementById("libPName1").innerHTML = document.getElementById("pName1").value;
    document.getElementById("libNoun1").innerHTML = document.getElementById("noun1").value;
    document.getElementById("libAdjFeel1").innerHTML = document.getElementById("adjFeel1").value;
    document.getElementById("libVerb1").innerHTML = document.getElementById("verb1").value;
    document.getElementById("libAdjFeel2").innerHTML = document.getElementById("adjFeel2").value;
    document.getElementById("libAnimal1").innerHTML = document.getElementById("animal1").value;
    document.getElementById("libVerb2").innerHTML = document.getElementById("verb2").value;
    document.getElementById("libColor1").innerHTML = document.getElementById("color1").value;
    document.getElementById("libVerb1").innerHTML = document.getElementById("verb3").value;
    document.getElementById("libAdverb1").innerHTML = document.getElementById("adverb1").value;
    document.getElementById("libNumber1").innerHTML = document.getElementById("number1").value;
    document.getElementById("libTime1").innerHTML = document.getElementById("time1").value;
    document.getElementById("libColor2").innerHTML = document.getElementById("color2").value;
    document.getElementById("libAnimal2").innerHTML = document.getElementById("animal2").value;
    document.getElementById("libNumber2").innerHTML = document.getElementById("number2").value;
    document.getElementById("libSilly1").innerHTML = document.getElementById("silly1").value;
    document.getElementById("libNoun2").innerHTML = document.getElementById("noun2").value;
    
    hide1("madlibInput");
    show1("madlibResult");
}

function reset1(){
    hide1("madlibResult");
    show1("madlibInput");
    clear1();
}

function clear1(){
    document.getElementById("pName1").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("adjFeel1").value = "";
    document.getElementById("verb1").value = "";
    document.getElementById("adjFeel2").value = "";
    document.getElementById("animal1").value = "";
    document.getElementById("verb2").value = "";
    document.getElementById("color1").value = "";
    document.getElementById("verb3").value = "";
    document.getElementById("adverb1").value = "";
    document.getElementById("number1").value = "";
    document.getElementById("time1").value = "";
    document.getElementById("color2").value = "";
    document.getElementById("animal2").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("silly1").value = "";
    document.getElementById("noun2").value = "";
}

function hide1(name){
    const madlib = document.getElementById(name);
    madlib.classList.replace("d-grid","d-none");
}

function show1(name){
    const madlib = document.getElementById(name);
    madlib.classList.replace("d-none","d-grid");
}
