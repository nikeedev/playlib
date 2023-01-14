import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Sprite extends GameObject {
    protected imageSrc: string;
    position: Vector2;
    protected screenSize: Size;
    protected image: HTMLImageElement;
    style: string;
    constructor(imageSrc: string, position: Vector2, screenSize: Size);
    init(): Promise<void>;
    draw(ctx: CanvasRenderingContext2D, imageSize?: Size): Promise<void>;
}
export { Sprite };
