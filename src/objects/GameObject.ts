import { Vector2 } from '../math/Vector2.js';


class GameObject {
    position: Vector2;
    protected screenSize: Vector2;
    
    constructor(position: Vector2, screenSize: Vector2) {
        this.position = position; 
        this.screenSize = screenSize;
    }

    draw(ctx: any)
    {
        
    }
}

export { GameObject } 
