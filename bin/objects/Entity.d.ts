import { Vector2 } from "../math/Vector2.js";
import { Size } from "../math/Size.js";
import { GameObject } from "./GameObject.js";
declare class Entity extends GameObject {
    position: Vector2;
    protected screenSize: Size;
    constructor(position: Vector2, screenSize: Size);
}
export { Entity };
