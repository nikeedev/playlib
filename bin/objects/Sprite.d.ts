import { Vec2 } from '../math/Vec2.js';
import { GameObject } from './GameObject.js';
declare class Sprite extends GameObject {
    protected imageSrc: string;
    position: Vec2;
    protected screenSize: Vec2;
    protected image: HTMLImageElement;
    style: string;
    constructor(imageSrc: string, position: Vec2, screenSize: Vec2);
    init(): Promise<void>;
    draw(ctx: CanvasRenderingContext2D, imageSize?: Vec2, clipPos?: Vec2, clipSize?: Vec2): Promise<void>;
}
export { Sprite };
