import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Sprite extends GameObject {
    protected imageSrc: string;
    position: Vector2;
    protected screenSize: Size;
    protected image: any;
    style: string;
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/ screenSize: Size);
    init(): Promise<unknown>;
    protected ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean): void;
}
export { Sprite };
