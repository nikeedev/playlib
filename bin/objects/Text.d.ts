import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Text extends GameObject {
    text: string;
    position: Vector2;
    protected screenSize: Vector2;
    color: string;
    font: string;
    constructor(text: string, position: Vector2, screenSize: Vector2);
    draw(ctx: any): void;
}
export { Text };
