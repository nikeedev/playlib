import { Vector2 } from "../math/Vector2.js"
import { Size } from "../math/Size.js"
import { GameObject } from "./GameObject.js"

class Entity extends GameObject {
    declare position: Vector2;
    declare protected screenSize: Size;
    
    constructor(position: Vector2, screenSize: Size) {
        super(position, screenSize);
    }
}

export { Entity }
