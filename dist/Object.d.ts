import { Size, Vector2 } from '../GameEngine.js';
declare class Object {
    type: string;
    src: string | undefined;
    text: string | undefined;
    position: Vector2;
    size: Size | undefined;
    screenSize: Size;
    obj: any;
    constructor(type: string, src: string, text: string, position: Vector2, size: Size, screenSize: Size);
    load(): void;
}
export { Object };
