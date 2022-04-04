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
import { Vector2 } from "./Vector2.js";


class Text {
    text: string;
    position: Vector2;
    screenSize: Size;
    constructor(text: string, position: Vector2, screenSize: Size) {
        this.text = text;
        this.position = position;
        this.screenSize = screenSize;
    }
    color = "#000000";
    font = "20px Arial";
    
    draw(ctx: any, ClearScreen: any) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
    looping: boolean | undefined;
    update(ctx: any, func: any, ClearScreen: any, looping = true) {  
        this.looping = typeof looping == 'boolean'? looping : true;       
        const updateMethod = () => {
            ctx.font = this.font
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillText(this.text, this.position.x, this.position.y);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);  
    }
}


export { Text }; 