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
    declare protected screenSize: Vector2;
    protected image: HTMLImageElement;
    style: string = "";
    
    constructor(imageSrc: string, position: Vector2, screenSize: Vector2) {
        super(position, screenSize);
        this.imageSrc = imageSrc;

    }
    
    async init()
    {
        // Load the image
        const img: any = await loadImage(this.imageSrc);
        img.style.imageRendering += "pixelated";
        this.image = img;
        console.log(this.image)
    }
    

    async draw(ctx: CanvasRenderingContext2D, imageSize?: Vector2, clipPos?: Vector2, clipSize?: Vector2)
    {
        // console.log(this.image)
        
        
        if (clipPos == undefined || clipSize === undefined) {
            ctx.drawImage(this.image, clipPos.x, clipPos.y, clipSize.x, clipSize.y, this.position.x, this.position.y, imageSize.x, imageSize.y);
        } else {
            ctx.drawImage(this.image, this.position.x, this.position.y, imageSize.x, imageSize.y);
        }
    }
}


export { Sprite };
