/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/

import { Size } from "./Size.js";

class Rect {
    constructor(x, y, size, screenSize) {
        this.x = x;
        this.y = y;
        this.size = new Size(size.width, size.height);
        this.screenSize = new Size(screenSize.width, screenSize.height);
    }
    color = "#000000";
    draw(ctx, ClearScreen) {
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
    }
    update(ctx, func, ClearScreen, looping = true) {  
        this.looping = typeof looping == 'boolean'? looping : true;       
        const updateMethod = () => {
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);  
    }
}


export { Rect }; 