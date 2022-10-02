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
    imageSize: Size | undefined;
    declare protected screenSize: Size;
    protected image: any;
    style: string;
    
    constructor(imageSrc: string, position: Vector2, screenSize: Size, imageSize: Size = null) {
        super(position, screenSize);
        this.imageSrc = imageSrc;
        this.imageSize.width = typeof this.imageSize == null ? this.image.naturalWidth : this.imageSize.width
        this.imageSize.height = typeof this.imageSize == null ? this.image.naturalHeight : this.imageSize.height
        loadImage(imageSrc).then(img => this.image = img);
    }
    async init()
    {
        // Load the image
        const img = await loadImage(this.imageSrc);
        return this.image = img;
    }
    

    draw(ctx: any) {
        this.image.style.image_rendering = "pixelated";
        this.image.style += this.style;
        ctx.drawImage(this.image, this.position.x, this.position.y, this.imageSize.height);
    }
}


export { Sprite };
