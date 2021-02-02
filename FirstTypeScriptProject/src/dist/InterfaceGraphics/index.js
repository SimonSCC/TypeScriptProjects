"use strict";
function draw(figure) {
    console.log("Drawing mySquare with parameters " + figure.height + figure.length);
    var CanvasElem = document.getElementById("myCanvas");
    var CanvasContext = CanvasElem.getContext("2d"); //Udråbstegn bagpå her, indikere at den ikke må være null
    CanvasElem.height;
    CanvasContext.lineWidth = 1;
    CanvasContext === null || CanvasContext === void 0 ? void 0 : CanvasContext.moveTo(0, 0);
    // CanvasContext?.lineTo(figure.height , 0);
    // CanvasContext?.lineTo(figure.height, figure.length);
    // CanvasContext?.lineTo(0, figure.length);
    // CanvasContext?.lineTo(0, 0);
    CanvasContext === null || CanvasContext === void 0 ? void 0 : CanvasContext.rect(0, 0, figure.height, figure.length);
    CanvasContext === null || CanvasContext === void 0 ? void 0 : CanvasContext.stroke();
}
var mySquare = { height: 200, length: 350 };
draw(mySquare);
//Transcompile into javascript by typing TSC in cmd
