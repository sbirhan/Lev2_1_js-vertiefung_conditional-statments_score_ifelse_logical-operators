var inputValues = document.getElementsByTagName("input");
var inputList = [];
var resultList = [];
var tem
var maxResult = 0;
var widthList = [];
var resultBar1 = document.getElementById("resultBar1");
var resultBar2 = document.getElementById("resultBar2");
var resultBar3 = document.getElementById("resultBar3");
var resultBar4 = document.getElementById("resultBar4");


function start(){
    for (i = 0; i < 8; i++) {
        inputList[i] = parseInt(inputValues.item(i).value)    
    }
    for (i=0; i < 4; i++) {
        resultList[i] = 5 * inputList[2*i] + inputList[2*i+1];
    }
    maxResult = Math.max.apply(Math, resultList);
    for (i=0; i < 4; i++) {
        widthList[i] = (resultList[i] * (72 / maxResult)).toFixed(0);
    }
    animation (widthList[0], resultBar1);
    animation (widthList[1], resultBar2);
    animation (widthList[2], resultBar3);
    animation (widthList[3], resultBar4);
}


function animation (maxWidth,resultBar) {
    var position = 0;
    var id = setInterval(frame, 20);

    function frame(){
        if (position == maxWidth) {
            clearInterval(id);
        } 
        else {
            position++; 
            resultBar.style.width = position + "vw";
        } 
    }
}