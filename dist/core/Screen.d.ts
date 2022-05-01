import { Size } from '../datatypes/Size.js';
declare class Screen {
    canvas: any;
    ctx: any;
    CanvasSize: Size;
    version: any;
    constructor(SetSize: Size);
    init(): void;
    setScreenMode(mode: string): void;
}
export { Screen };
