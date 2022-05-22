import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';
declare class Text {
    text: string;
    position: Vector2;
    private screenSize;
    constructor(text: string, position: Vector2, screenSize: Size);
    color: string;
    font: string;
    private ClearScreen;
    draw(ctx: any, ClearScreen?: boolean): void;
}
export { Text };
