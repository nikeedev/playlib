import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Sprite extends GameObject {
    protected imageSrc: string;
    position: Vector2;
    imageSize: Size | undefined;
    protected screenSize: Size;
    protected image: any;
    style: string;
    constructor(imageSrc: string, position: Vector2, screenSize: Size, imageSize?: Size);
    init(): Promise<unknown>;
    draw(ctx: CanvasRenderingContext2D): void;
}
export { Sprite };
