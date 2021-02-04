// //Custom elements:
// class HeroBanner extends HTMLElement
// {
//     constructor()
//     {
//         super(); //Calls constructer of extended class
//         this.innerHTML = `${this.getAttribute('title')}`;
//         //If we set style on the above we will affect everything in the html page. We don't want that. We want to encapsulate everything
//         //Into the web component.
//         //This is done by creating a shadow DOM
//     }
// }

// window.customElements.define('hero-banner', HeroBanner);



const template = document.createElement('template');
template.innerHTML = 
`
<style>

    @font-face{
	src: url(./fonts/BwModelicaSS01-ExtraBold.ttf);
	font-family: Modelica;
    }

        .hero{
            width: 100%;
            height: 100%;
            background-image: url(./img/mountain1.jpg);
            /* Position and center the image to scale nicely on all screens */
            background-position: center;
            background-position-y: 13%;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;  
            text-align: center;
            font-family: Modelica;
        }

        .hero-title{
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: black;
        }

        .hero-body
        {
            text-align: center;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fffbfb;
        }

        .hero-body h1{
            /* color: #fdfafa; */
        }

        .hero-body p{
            /* color: ; */
        }

        .hero-body button{
            border-radius: 5px;
            border: none;
            margin-top: 10%;
            padding: 15px 25px;
            background-color: #d89595;
            color: #fffbfb;
            font-weight: bolder;
        }

        .hero-body button:hover
        {
            background-color: #d67d7d; 
        }

        .hero-body button:focus{
            outline: none;
            border: 1px black solid;
        }
        
    </style>
    <div class="hero">
    <div class="hero-body">
    <h1>Title</h1>
    <p>text</p>
    <button id="herobtn_click">buttonText</button>
    </div>
    </div>
`;


//Shadow DOM
class HeroBanner extends HTMLElement
{
    constructor()
    {
        super(); //Calls constructer of extended class

        this.attachShadow({ mode: 'open'});
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
        this.shadowRoot!.querySelector('h1')!.innerText = this.getAttribute('title')!;
        this.shadowRoot!.querySelector('p')!.innerText = this.getAttribute('text')!;
        this.shadowRoot!.querySelector('button')!.innerText = this.getAttribute('buttonText')!;
//         let test = this.shadowRoot!.querySelector('.hero');
// console.log(test);
        // style.backgroundImage = this.getAttribute('backgroundImg')!;
     
    }

    heroBtn_Click()
    {
        console.log("Clicked Hero Btn");
    }

    connectedCallback() //Called everytime the element is inserted into the DOM 
    {
        this.shadowRoot!.querySelector('#herobtn_click')!.
        addEventListener('click', () => this.heroBtn_Click());
    }

    disconnectedCallback()
    {
        this.shadowRoot!.querySelector('#herobtn_click')!.removeEventListener('click', this.heroBtn_Click);
    }
}

window.customElements.define('hero-banner', HeroBanner);




