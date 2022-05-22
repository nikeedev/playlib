import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';


function loadImage(url: string) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}

class Sprite {
    private imageSrc: string;
    position: Vector2;
    //size: Size | undefined;
    private screenSize: Size;
    private image: any;
    style: string;
    
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/screenSize: Size) {
        this.imageSrc = imageSrc;
        this.position = position;
        //this.size = typeof size != null ? size : null;
        this.screenSize = screenSize;
        loadImage(imageSrc).then(img => this.image = img);
    }
    async init()
    {
        // Load the image
        const img = await loadImage(this.imageSrc);
        return this.image = img;
    }
    private ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean) {
        this.image.style = this.style;
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}


export { Sprite };
