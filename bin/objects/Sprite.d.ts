import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Sprite extends GameObject {
    protected imageSrc: string;
    position: Vector2;
    protected screenSize: Vector2;
    protected image: HTMLImageElement;
    style: string;
    constructor(imageSrc: string, position: Vector2, screenSize: Vector2);
    init(): Promise<void>;
    draw(ctx: CanvasRenderingContext2D, imageSize?: Vector2, clipPos?: Vector2, clipSize?: Vector2): Promise<void>;
}
export { Sprite };
