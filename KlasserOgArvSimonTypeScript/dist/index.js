"use strict";
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
var factory = new FigureFactory();
var selectElem = document.getElementById('selectDropdown');
var triangle;
var rectangle;
var circle;
// let listOfActiveFigure : IFigure[] = [];
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
        heightSetting.addEventListener("change", function () {
            triangle.Height = parseInt(heightSetting.value);
            triangle.draw();
        });
        this.SettingsLocation.appendChild(heightSetting);
        this.SettingsLocation.appendChild(document.createElement("br"));
        var widthLabel = document.createElement("span");
        widthLabel.innerHTML = "Width";
        this.SettingsLocation.appendChild(widthLabel);
        var widthSetting = document.createElement("Input");
        widthSetting.type = "number";
        widthSetting.value = this.Width.toString();
        widthSetting.addEventListener("change", function () {
            triangle.Width = parseInt(widthSetting.value);
            triangle.draw();
        });
        this.SettingsLocation.appendChild(widthSetting);
    };
    Triangle.prototype.draw = function () {
        this.Context.clearRect(0, 0, this.Width + 100, this.Height + 15); //Clear only this triangle
        this.Context.beginPath();
        this.Context.moveTo(100, 15);
        // this.Context.lineTo(this.Width + 100, 15);
        // this.Context.lineTo(this.Width * 1.5 + 100 / 2, this.Height + 15)
        this.Context.lineTo(this.Width, this.Height);
        this.Context.lineTo(this.Width / 2, this.Height);
        this.Context.closePath(); //This draws line to beginning
        this.Context.fillStyle = 'green';
        this.Context.fill();
    };
    return Triangle;
}());
// 
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
        var heightLabel = document.createElement("span");
        heightLabel.innerHTML = "Height ";
        this.SettingsLocation.appendChild(heightLabel);
        var heightSetting = document.createElement("Input"); //The <> is the same as if i cast it like " as HTMLInputElement"
        heightSetting.type = "number";
        heightSetting.value = this.Height.toString();
        heightSetting.addEventListener("change", function () {
            rectangle.Height = parseInt(heightSetting.value);
            rectangle.draw();
        });
        this.SettingsLocation.appendChild(heightSetting);
        this.SettingsLocation.appendChild(document.createElement("br"));
        var widthLabel = document.createElement("span");
        widthLabel.innerHTML = "Width";
        this.SettingsLocation.appendChild(widthLabel);
        var widthSetting = document.createElement("Input");
        widthSetting.type = "number";
        widthSetting.value = this.Width.toString();
        widthSetting.addEventListener("change", function () {
            rectangle.Width = parseInt(widthSetting.value);
            rectangle.draw();
        });
        this.SettingsLocation.appendChild(widthSetting);
    };
    Rectangle.prototype.draw = function () {
        this.Context.clearRect(15, 15, this.Width + 15, this.Height + 15);
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
selectElem.addEventListener("change", function () {
    removeOptions();
    var value = selectElem.value;
    console.log("On Change event called " + value);
    switch (value) {
        case "Rectangle":
            console.log("Drawing Rectangle");
            var rect = factory.createRectangle(25, 50);
            rectangle = rect;
            rect.draw();
            rect.spawnSettings();
            // if(listOfActiveFigure.includes())
            // {
            //     console.log("True, contains rect");
            // }
            //    listOfActiveFigure.push(rect);
            break;
        case "Circle":
            var myCircle = factory.createCircle(50);
            circle = myCircle;
            console.log("Drawing Circle");
            myCircle.draw();
            break;
        case "Triangle":
            console.log("Drawing Triangle");
            var triang = factory.createTriangle(100, 150);
            triang.draw();
            triang.spawnSettings();
            triangle = triang;
            break;
        default:
            break;
    }
});
function removeOptions() {
    removeAllChildNodes(document.getElementById("OptionsForFigure")); //removes children from options
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
document.getElementById('clearBtn').addEventListener('click', function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.height, canvas.width);
    var selectElem = document.getElementById('selectDropdown');
    selectElem.selectedIndex = 0;
    removeOptions();
    triangle = null;
    rectangle = null;
    circle = null;
});
// Main();
//The reason why it wouldn't delete with         this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
// was that I hadn't used ctx.beginpath(); and endpath
// function heightChanged(typeOfFigure : string, newHeight : number)
// {
//     console.log("height changed" + newHeight);
//     switch (typeOfFigure) {
//         case "Triangle":
//            let asTriangle = triangle as Triangle;
//            asTriangle.Height = newHeight; 
//            asTriangle.draw();
//             break;
//     case "Rectangle":
//         let asRect = rectangle as Rectangle;
//         asRect.Height = newHeight;
//         asRect.draw();
//         default:
//             break;
//     }
// }
