import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
declare class Sprite {
    imageSrc: string;
    position: Vector2;
    screenSize: Size;
    image: any;
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/ screenSize: Size);
    init(): Promise<unknown>;
    ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean): void;
    update(ctx: any, func: any, ClearScreen: boolean): void;
}
export { Sprite };
