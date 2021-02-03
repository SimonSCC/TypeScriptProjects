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
    function Triangle(height, width, canvas, settingsLoc) {
        // super(context);
        this.Canvas = canvas;
        this.SettingsLocation = settingsLoc;
        this.Context = this.Canvas.getContext("2d");
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
        // this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
        this.Context.beginPath();
        this.Context.moveTo(100, 15);
        this.Context.lineTo(this.Width + 100, 15);
        this.Context.lineTo(this.Width * 1.5 + 100 / 2, this.Height + 15);
        this.Context.closePath(); //This draws line to beginning
        this.Context.fillStyle = 'green';
        this.Context.fill();
    };
    return Triangle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width, canvas, settingsLoc) {
        // super(context);
        this.Canvas = canvas;
        this.SettingsLocation = settingsLoc;
        this.Context = this.Canvas.getContext("2d");
        this.Height = height;
        this.Width = width;
    }
    Rectangle.prototype.spawnSettings = function () {
        throw new Error("Method not implemented.");
    };
    Rectangle.prototype.draw = function () {
        this.Context.clearRect(15, 15, this.Width, this.Height);
        this.Context.beginPath();
        this.Context.rect(15, 15, this.Width, this.Height);
        this.Context.closePath();
        this.Context.fillStyle = 'teal';
        this.Context.fill();
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius, canvas, settingsLoc) {
        this.Radius = radius;
        this.Canvas = canvas;
        this.SettingsLocation = settingsLoc;
        this.Context = this.Canvas.getContext("2d");
    }
    Circle.prototype.spawnSettings = function () {
        throw new Error("Method not implemented.");
    };
    Circle.prototype.draw = function () {
        this.Context.beginPath();
        // this.Context.moveTo(100 + this.Radius, 75);
        this.Context.arc(this.Canvas.width / 2, this.Canvas.height / 2, this.Radius, 0, 2 * Math.PI);
        this.Context.closePath();
        this.Context.fillStyle = 'red';
        this.Context.fill();
    };
    return Circle;
}());
var FigureFactory = /** @class */ (function () {
    function FigureFactory() {
        this.CanvasElem = document.getElementById("myCanvas");
        this.SettingsForFigure = document.getElementById("OptionsForFigure");
    }
    FigureFactory.prototype.createRectangle = function (height, width) {
        return new Rectangle(height, width, this.CanvasElem, this.SettingsForFigure);
    };
    FigureFactory.prototype.createCircle = function (radius) {
        return new Circle(radius, this.CanvasElem, this.SettingsForFigure);
    };
    FigureFactory.prototype.createTriangle = function (height, width) {
        return new Triangle(height, width, this.CanvasElem, this.SettingsForFigure);
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
document.getElementById('clearBtn').addEventListener('click', function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.height, canvas.width);
    var selectElem = document.getElementById('selectDropDown');
    selectElem.selectedIndex = 1;
});
// Main();
//The reason why it wouldn't delete with         this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
// was that I hadn't used ctx.beginpath(); and endpath
