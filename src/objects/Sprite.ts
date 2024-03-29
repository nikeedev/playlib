import { Vec2 } from '../math/Vec2.js';
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
    declare position: Vec2;
    declare protected screenSize: Vec2;
    protected image: HTMLImageElement;
    public style: string = "";
    
    constructor(imageSrc: string, position: Vec2, screenSize: Vec2) {
        super(position, screenSize);
        this.imageSrc = imageSrc;

    }
    
    async init()
    {
        // Load the image
        const img: any = await loadImage(this.imageSrc);
        img.style.imageRendering = "pixelated";
        this.image = img;
        // console.log(this.image);
    }
    

    async draw(ctx: CanvasRenderingContext2D, imageSize?: Vec2, clipPos?: Vec2, clipSize?: Vec2)
    {
        // console.log("drawing image")
        if (this.image != undefined) {
            if (clipPos == undefined || clipSize === undefined || imageSize == undefined) {
                ctx.drawImage(this.image, this.position.x, this.position.y, this.image.width, this.image.height);
            } else {
                ctx.drawImage(this.image, clipPos.x, clipPos.y, clipSize.x, clipSize.y, this.position.x, this.position.y, imageSize.x, imageSize.y);
            }
        } else {
            console.info(`Sprite "${this.imageSrc}" is loading...`)
        }
    }
}


export { Sprite };
