import { Vector2 } from "../math/Vector2.js";
import { Size } from "../math/Size.js";
import { GameObject } from "./GameObject.js";
declare class Shape extends GameObject {
    position: Vector2;
    size: Size;
    protected screenSize: Size;
    protected shape: string;
    constructor(shape: string, position: Vector2, size: Size, screenSize: Size);
    color: string;
    draw(ctx: any): void;
}
export { Shape };
