import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js'


class Rect extends GameObject {
    declare position: Vector2;
    size: Size;
    declare protected screenSize: Size;
    
    constructor(position: Vector2, size: Size, screenSize: Size) {
        super(position, screenSize); 
        this.size = size;
        this.color = "#ffffff"
    }
    color = "#ffffff";
    declare protected ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean = true) {
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    
}


export { Rect }; 