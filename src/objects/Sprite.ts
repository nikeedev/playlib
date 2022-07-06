import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';


function loadImage(url: string) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}

class Sprite extends GameObject {
    protected imageSrc: string;
    declare position: Vector2;
    //size: Size | undefined;
    declare protected screenSize: Size;
    protected image: any;
    style: string;
    
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/screenSize: Size) {
        super(position, screenSize);
        this.imageSrc = imageSrc;
        //this.size = typeof size != null ? size : null;
        loadImage(imageSrc).then(img => this.image = img);
    }
    async init()
    {
        // Load the image
        const img = await loadImage(this.imageSrc);
        return this.image = img;
    }
    

    draw(ctx: any) {
        this.image.style.image_rendering = "auto";
        this.image.style = this.style;
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}


export { Sprite };
