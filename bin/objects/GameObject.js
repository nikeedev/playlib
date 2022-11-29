import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';
class GameObject {
    position;
    screenSize;
    constructor(position, screenSize) {
        this.position = position;
        this.screenSize = screenSize;
    }
    draw(ctx) {
    }
}
export { GameObject };
