/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/

function loadImage(url: string) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}

import { Size } from "./Size.js";
import { Vector2 } from "./Vector2.js";

class Sprite {
    imageSrc: string;
    position: Vector2;
    //size: Size | undefined;
    screenSize: Size;
    image: any;
    
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
    
    
    draw(ctx: any, ClearScreen: boolean) {
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
    
    update(ctx: any, func: any, ClearScreen: boolean) {
        const updateMethod = () => {
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.drawImage(this.image, this.position.x, this.position.y);
            requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);  
    }
}


export { Sprite }; 