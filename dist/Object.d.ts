import { Size } from '../GameEngine.js';
declare class Object {
    file: string;
    obj: any;
    screenSize: Size;
    constructor(JsonFile: string, screenSize: Size);
    data: any;
    load(): void;
}
export { Object };
