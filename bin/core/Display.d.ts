import { Size } from '../math/Size.js';
declare class Display {
    canvas: any;
    ctx: any;
    CanvasSize: Size;
    version: any;
    constructor(SetSize: Size);
    init(): void;
    setScreenMode(mode: string): void;
}
export { Display };
