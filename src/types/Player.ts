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

var xvel = 15; 
var yvel = 15;


class Player {
    position: Vector2;
    size: Size;
    screenSize: Size;
    
    constructor(position: Vector2, size: Size, screenSize: Size) {
        this.position = position; 
        this.size = size;
        this.screenSize = screenSize;
    }
    color = "#000000";

    draw(ctx: any, ClearScreen: any) {
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    looping: boolean | undefined;
    update(ctx: any, func: any, ClearScreen: any, looping = true) {  
        this.looping = typeof looping == 'boolean'? looping : true;       
        const updateMethod = () => {
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        requestAnimationFrame(updateMethod);  
    }
}


export { Player }; 