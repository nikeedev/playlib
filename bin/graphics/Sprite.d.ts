import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
declare class Sprite {
    private imageSrc;
    position: Vector2;
    private screenSize;
    private image;
    style: string;
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/ screenSize: Size);
    init(): Promise<unknown>;
    private ClearScreen;
    draw(ctx: any, ClearScreen: boolean): void;
}
export { Sprite };
