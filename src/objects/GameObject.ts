import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';


class GameObject {
    position: Vector2;
    protected screenSize: Size;
    
    constructor(position: Vector2, screenSize: Size) {
        this.position = position; 
        this.screenSize = screenSize;
    }

}

export { GameObject } 
