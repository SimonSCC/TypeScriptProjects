interface IFigureFactory {
    CanvasElem: HTMLCanvasElement;
    CanvasContext: CanvasRenderingContext2D;
    createRectangle(height: number, width: number): IFigure;
    createCircle(radius: number): IFigure;
    createTriangle(height: number, width: number): IFigure;
}

interface IFigure {
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
    SettingsLocation: HTMLElement;
    Context: CanvasRenderingContext2D;
    Height: number;
    Width: number;

    constructor(height: number, width: number, context: CanvasRenderingContext2D, settingsLoc: HTMLElement) {
        // super(context);
        this.SettingsLocation = settingsLoc;
        this.Context = context;
        this.Height = height;
        this.Width = width;
    }
    spawnSettings(): void {
        let heightLabel = <HTMLElement> document.createElement("span");
        heightLabel.innerHTML = "Height ";
        this.SettingsLocation.appendChild(heightLabel);

        let heightSetting = <HTMLInputElement> document.createElement("Input"); //The <> is the same as if i cast it like " as HTMLInputElement"
        heightSetting.type = "number";
        heightSetting.value = this.Height.toString();
        
        this.SettingsLocation.appendChild(heightSetting);
    }
 

    draw(): void {
        this.Context.moveTo(0, 0);
        this.Context.lineTo(0, this.Width);
        this.Context.lineTo(this.Height, this.Width / 2)
        this.Context.lineTo(0, 0)
        this.Context.stroke();
    }
}

class Rectangle implements IFigure {
    Context: CanvasRenderingContext2D;
    Height: number;
    Width: number;

    constructor(height: number, width: number, context: CanvasRenderingContext2D) {
        this.Height = height;
        this.Width = width;
        this.Context = context;
    }
    spawnSettings(): void {
        throw new Error("Method not implemented.");
    }

    draw(): void {
        this.Context.moveTo(0, 0);
        this.Context.rect(0, 0, this.Width, this.Height);
        this.Context.stroke();
    }

}

class Circle implements IFigure {
    Context: CanvasRenderingContext2D;
    Radius: number

    constructor(radius: number, context: CanvasRenderingContext2D) {
        this.Radius = radius;
        this.Context = context
    }
    spawnSettings(): void {
        throw new Error("Method not implemented.");
    }
    draw(): void {
        this.Context.moveTo(100 + this.Radius, 75);
        this.Context.arc(100, 75, this.Radius, 0, 2 * Math.PI);
        this.Context.stroke();
    }

}

class FigureFactory implements IFigureFactory {
    CanvasElem: HTMLCanvasElement;
    CanvasContext: CanvasRenderingContext2D;
    SettingsForFigure: HTMLElement;

    constructor() {
        this.CanvasElem = document.getElementById("myCanvas") as HTMLCanvasElement;
        this.CanvasContext = this.CanvasElem.getContext("2d") !;
        this.SettingsForFigure = document.getElementById("OptionsForFigure")!;
    }

    createRectangle(height: number, width: number): IFigure {
        return new Rectangle(height, width, this.CanvasContext);
    }
    createCircle(radius: number): IFigure {
        return new Circle(radius, this.CanvasContext);
    }
    createTriangle(height: number, width: number): IFigure {
        return new Triangle(height, width, this.CanvasContext, this.SettingsForFigure);
    }


 
}

// function Main()
// {
//     console.log("Initiating JS");  

//     // factory.createCircle(5).draw(); // Circle not working 
//     // factory.createRectangle(25, 50).draw();

// }

const factory = new FigureFactory();
const selectElem = document.getElementById('selectDropdown')! as HTMLSelectElement;

selectElem.addEventListener("change", function (): void {
    
    removeAllChildNodes(document.getElementById("OptionsForFigure")!); //removes children from options
    

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


function removeAllChildNodes(parent : HTMLElement)
{
    while(parent.firstChild)
    {
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