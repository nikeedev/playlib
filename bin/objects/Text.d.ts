import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Text extends GameObject {
    text: string;
    position: Vector2;
    protected screenSize: Size;
    constructor(text: string, position: Vector2, screenSize: Size);
    color: string;
    font: string;
    draw(ctx: any): void;
}
export { Text };
