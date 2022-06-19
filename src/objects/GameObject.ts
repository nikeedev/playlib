import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';


class GameObject {
    position: Vector2;
    protected screenSize: Size;
    
    constructor(position: Vector2, screenSize: Size) {
        this.position = position; 
        this.screenSize = screenSize;
    }
    
    protected ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean = true) {
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
    }
    
}

export { GameObject } 
