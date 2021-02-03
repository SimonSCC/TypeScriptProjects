interface IFigureFactory {
    CanvasElem: HTMLCanvasElement;
    createRectangle(height: number, width: number): IFigure;
    createCircle(radius: number): IFigure;
    createTriangle(height: number, width: number): IFigure;
}

interface IFigure {
    Canvas: HTMLCanvasElement;
    Context: CanvasRenderingContext2D;
    draw(): void;
    spawnSettings(): void;
}

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




class Triangle implements IFigure {
    Canvas: HTMLCanvasElement;
    Context: CanvasRenderingContext2D;
    SettingsLocation: HTMLElement;

    Height: number;
    Width: number;

    constructor(height: number, width: number, canvas: HTMLCanvasElement, settingsLoc: HTMLElement) {
        // super(context);
        this.Canvas = canvas;
        this.SettingsLocation = settingsLoc;
        this.Context = this.Canvas.getContext("2d") !;
        this.Height = height;
        this.Width = width;
    }
    spawnSettings(): void {
        let heightLabel = < HTMLElement > document.createElement("span");
        heightLabel.innerHTML = "Height ";
        this.SettingsLocation.appendChild(heightLabel);

        let heightSetting = < HTMLInputElement > document.createElement("Input"); //The <> is the same as if i cast it like " as HTMLInputElement"
        heightSetting.type = "number";
        heightSetting.value = this.Height.toString();

        this.SettingsLocation.appendChild(heightSetting);
    }


    draw(): void {
        // this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
        this.Context.beginPath();
        this.Context.moveTo(100, 15);
        this.Context.lineTo(this.Width + 100, 15);
        this.Context.lineTo(this.Width * 1.5 + 100 / 2, this.Height + 15)
        this.Context.closePath(); //This draws line to beginning
        this.Context.fillStyle = 'green';
        this.Context.fill();
    }
}

class Rectangle implements IFigure {
    Canvas: HTMLCanvasElement;
    Context: CanvasRenderingContext2D;
    SettingsLocation: HTMLElement;

    Height: number;
    Width: number;

    constructor(height: number, width: number, canvas: HTMLCanvasElement, settingsLoc: HTMLElement) {
        // super(context);
        this.Canvas = canvas;
        this.SettingsLocation = settingsLoc;
        this.Context = this.Canvas.getContext("2d") !;
        this.Height = height;
        this.Width = width;
    }
    spawnSettings(): void {
        throw new Error("Method not implemented.");
    }

    draw(): void {
        this.Context.clearRect(15, 15, this.Width, this.Height); 
        this.Context.beginPath();
        this.Context.rect(15, 15, this.Width, this.Height);
        this.Context.closePath();
        this.Context.fillStyle = 'teal';
        this.Context.fill();
    }

}

class Circle implements IFigure {
    Canvas: HTMLCanvasElement;
    Context: CanvasRenderingContext2D;
    SettingsLocation: HTMLElement;

    Radius: number

    constructor(radius: number, canvas: HTMLCanvasElement, settingsLoc: HTMLElement) {
        this.Radius = radius;
        this.Canvas = canvas;
        this.SettingsLocation = settingsLoc;
        this.Context = this.Canvas.getContext("2d") !;
    }
    spawnSettings(): void {
        throw new Error("Method not implemented.");
    }
    draw(): void {
        this.Context.beginPath();
        // this.Context.moveTo(100 + this.Radius, 75);
        this.Context.arc(this.Canvas.width / 2, this.Canvas.height / 2, this.Radius, 0, 2 * Math.PI);
        this.Context.closePath();
        this.Context.fillStyle = 'red';
        this.Context.fill();
    }

}

class FigureFactory implements IFigureFactory {
    CanvasElem: HTMLCanvasElement;
    SettingsForFigure: HTMLElement;

    constructor() {
        this.CanvasElem = document.getElementById("myCanvas") as HTMLCanvasElement;
        this.SettingsForFigure = document.getElementById("OptionsForFigure") !;
    }

    createRectangle(height: number, width: number): IFigure {
        return new Rectangle(height, width, this.CanvasElem, this.SettingsForFigure);
    }
    createCircle(radius: number): IFigure {
        return new Circle(radius, this.CanvasElem, this.SettingsForFigure);
    }
    createTriangle(height: number, width: number): IFigure {
        return new Triangle(height, width, this.CanvasElem, this.SettingsForFigure);
    }



}

// function Main()
// {
//     console.log("Initiating JS");  

//     // factory.createCircle(5).draw(); // Circle not working 
//     // factory.createRectangle(25, 50).draw();

// }

const factory = new FigureFactory();
const selectElem = document.getElementById('selectDropdown') !as HTMLSelectElement;

selectElem.addEventListener("change", function (): void {

    removeAllChildNodes(document.getElementById("OptionsForFigure") !); //removes children from options


    let value: string = selectElem.value;
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
            let triangle = factory.createTriangle(25, 50);
            triangle.draw();
            triangle.spawnSettings();

            break;
        default:

            break;
    }
});


function removeAllChildNodes(parent: HTMLElement) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('clearBtn')!.addEventListener('click', function() {
    let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d")!;
    context.clearRect(0, 0, canvas.height, canvas.width);
 let selectElem = <HTMLSelectElement> document.getElementById('selectDropDown');
 selectElem.selectedIndex = 1;
});
// Main();

//The reason why it wouldn't delete with         this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
// was that I hadn't used ctx.beginpath(); and endpath