import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';

class Rect {
    position: Vector2;
    size: Size;
    private screenSize: Size;
    
    constructor(position: Vector2, size: Size, screenSize: Size) {
        this.position = position; 
        this.size = size;
        this.screenSize = screenSize;
    }
    color = "#000000";
    private ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean = true) {
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    
}


export { Rect }; 