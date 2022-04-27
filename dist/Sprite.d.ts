import { Size } from "./Size.js";
import { Vector2 } from "./Vector2.js";
declare class Sprite {
    imageSrc: string;
    position: Vector2;
    screenSize: Size;
    image: any;
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/ screenSize: Size);
    init(): Promise<unknown>;
<<<<<<< HEAD
=======
    ClearScreen: boolean | undefined;
>>>>>>> 605fca4b5a15c5ba96fe82b3d230b4092150896c
    draw(ctx: any, ClearScreen: boolean): void;
    update(ctx: any, func: any, ClearScreen: boolean): void;
}
export { Sprite };
