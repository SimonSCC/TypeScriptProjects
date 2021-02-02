interface square{
    height : number;
    length : number;
}

function draw(figure : square) : void
{
    console.log("Drawing mySquare with parameters " + figure.height + figure.length);
   let CanvasElem : HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
    let CanvasContext : CanvasRenderingContext2D = CanvasElem.getContext("2d")!; //Udråbstegn bagpå her, indikere at den ikke må være null

     CanvasElem.height
    CanvasContext!.lineWidth = 1;

    CanvasContext?.moveTo(0, 0);
    // CanvasContext?.lineTo(figure.height , 0);
    // CanvasContext?.lineTo(figure.height, figure.length);
    // CanvasContext?.lineTo(0, figure.length);
    // CanvasContext?.lineTo(0, 0);
    CanvasContext?.rect(0, 0, figure.height, figure.length);
    CanvasContext?.stroke();

    
    
}

let mySquare : square = {height: 200, length: 350};
draw(mySquare);

//Transcompile into javascript by typing TSC in cmd