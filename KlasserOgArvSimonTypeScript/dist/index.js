"use strict";
// class Figure implements IFigure
// {
//     Context: CanvasRenderingContext2D;
//     constructor(context: CanvasRenderingContext2D)
//     {
//         this.Context = context;
//     }
//      draw(): void {
//         throw new Error("Method not implemented.");
//     }
//     spawnSettings(): void {
//         throw new Error("Method not implemented.");
//     }
// }
var Triangle = /** @class */ (function () {
    function Triangle(height, width, context, settingsLoc) {
        // super(context);
        this.SettingsLocation = settingsLoc;
        this.Context = context;
        this.Height = height;
        this.Width = width;
    }
    Triangle.prototype.spawnSettings = function () {
        var heightLabel = document.createElement("span");
        heightLabel.innerHTML = "Height ";
        this.SettingsLocation.appendChild(heightLabel);
        var heightSetting = document.createElement("Input"); //The <> is the same as if i cast it like " as HTMLInputElement"
        heightSetting.type = "number";
        heightSetting.value = this.Height.toString();
        this.SettingsLocation.appendChild(heightSetting);
    };
    Triangle.prototype.draw = function () {
        this.Context.moveTo(0, 0);
        this.Context.lineTo(0, this.Width);
        this.Context.lineTo(this.Height, this.Width / 2);
        this.Context.lineTo(0, 0);
        this.Context.stroke();
    };
    return Triangle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width, context) {
        this.Height = height;
        this.Width = width;
        this.Context = context;
    }
    Rectangle.prototype.spawnSettings = function () {
        throw new Error("Method not implemented.");
    };
    Rectangle.prototype.draw = function () {
        this.Context.moveTo(0, 0);
        this.Context.rect(0, 0, this.Width, this.Height);
        this.Context.stroke();
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius, context) {
        this.Radius = radius;
        this.Context = context;
    }
    Circle.prototype.spawnSettings = function () {
        throw new Error("Method not implemented.");
    };
    Circle.prototype.draw = function () {
        this.Context.moveTo(100 + this.Radius, 75);
        this.Context.arc(100, 75, this.Radius, 0, 2 * Math.PI);
        this.Context.stroke();
    };
    return Circle;
}());
var FigureFactory = /** @class */ (function () {
    function FigureFactory() {
        this.CanvasElem = document.getElementById("myCanvas");
        this.CanvasContext = this.CanvasElem.getContext("2d");
        this.SettingsForFigure = document.getElementById("OptionsForFigure");
    }
    FigureFactory.prototype.createRectangle = function (height, width) {
        return new Rectangle(height, width, this.CanvasContext);
    };
    FigureFactory.prototype.createCircle = function (radius) {
        return new Circle(radius, this.CanvasContext);
    };
    FigureFactory.prototype.createTriangle = function (height, width) {
        return new Triangle(height, width, this.CanvasContext, this.SettingsForFigure);
    };
    return FigureFactory;
}());
// function Main()
// {
//     console.log("Initiating JS");  
//     // factory.createCircle(5).draw(); // Circle not working 
//     // factory.createRectangle(25, 50).draw();
// }
var factory = new FigureFactory();
var selectElem = document.getElementById('selectDropdown');
selectElem.addEventListener("change", function () {
    removeAllChildNodes(document.getElementById("OptionsForFigure")); //removes children from options
    var value = selectElem.value;
    console.log("On Change event called " + value);
    switch (value) {
        case "Rectangle":
            console.log("Drawing Rectangle");
            factory.createRectangle(25, 50).draw();
            break;
        case "Circle":
            console.log("Drawing Circle");
            factory.createCircle(50).draw();
            break;
        case "Triangle":
            console.log("Drawing Triangle");
            var triangle = factory.createTriangle(25, 50);
            triangle.draw();
            triangle.spawnSettings();
            break;
        default:
            break;
    }
});
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// document.getElementById('clear')!.addEventListener('click', function() {
//     console.log("Should reset canvas");
//     let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
//     let context = canvas.getContext("2d")!;
//     context.clearRect(0, 0, canvas.height, canvas.width);
// });
// Main();
