import { Size } from "./Size.js";
import { Vector2 } from "./Vector2.js";
declare class Text {
    text: string;
    position: Vector2;
    screenSize: Size;
    constructor(text: string, position: Vector2, screenSize: Size);
    color: string;
    font: string;
<<<<<<< HEAD
    draw(ctx: any, ClearScreen: boolean): void;
    update(ctx: any, func: any, ClearScreen: boolean): void;
=======
    ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen?: boolean): void;
    update(ctx: any, func: any, ClearScreen?: boolean): void;
>>>>>>> 605fca4b5a15c5ba96fe82b3d230b4092150896c
}
export { Text };
