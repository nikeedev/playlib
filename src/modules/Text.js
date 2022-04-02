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


class Text {
    constructor(text, x, y, screenSize) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.screenSize = new Size(screenSize.width, screenSize.height);
    }
    color = "#000000";
    font = "20px Arial";
    
    draw(ctx, ClearScreen) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.x, this.y);
    }
    update(ctx, func, ClearScreen, looping = true) {  
        this.looping = typeof looping == 'boolean'? looping : true;       
        const updateMethod = () => {
            ctx.font = this.font
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillText(this.text, this.x, this.y);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);  
    }
}


export { Text }; 