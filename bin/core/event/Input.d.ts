import { Keys } from './Keys.js';
declare class Input {
    private static keysPressed;
    private static mouseBtnsPressed;
    private static mousePos;
    constructor();
    static KeyPressed(key: Keys): boolean;
    static MouseBtnPressed(btn: any): boolean;
}
export { Input };
