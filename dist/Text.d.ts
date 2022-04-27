import { Size } from "./Size.js";
import { Vector2 } from "./Vector2.js";
declare class Text {
    text: string;
    position: Vector2;
    screenSize: Size;
    constructor(text: string, position: Vector2, screenSize: Size);
    color: string;
    font: string;
    draw(ctx: any, ClearScreen: boolean): void;
    update(ctx: any, func: any, ClearScreen: boolean): void;
}
export { Text };
