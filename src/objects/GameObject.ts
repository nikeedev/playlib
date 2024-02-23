import { Vec2 } from '../math/Vec2.js';


class GameObject {
    position: Vec2;
    protected screenSize: Vec2;
    
    constructor(position: Vec2, screenSize: Vec2) {
        this.position = position; 
        this.screenSize = screenSize;
    }

    draw(ctx: any)
    {
        
    }
}

export { GameObject } 
