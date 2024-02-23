import { Keys } from './Keys.js'
import { Vec2 } from '../../math/Vec2.js'


class Input {
    private static keysPressed = {}
    private static mouseBtnsPressed = {}

    private static mousePos: Vec2 = new Vec2();

    constructor() {
        window.addEventListener("keydown", e => {
            Input.keysPressed[e.keyCode] = true;
        })

        window.addEventListener("keyup", e => {
            Input.keysPressed[e.keyCode] = false;
        })

        window.addEventListener("pointermove", e => {
            Input.mouseBtnsPressed[e.button] = true;

            Input.mousePos.x = e.x;
            Input.mousePos.y = e.y;
        })

        
    }

    static KeyPressed(key: Keys) {
        return !!this.keysPressed[key];
    }
    
    static MouseBtnPressed(btn: any) {
        return !!this.mouseBtnsPressed[btn];
    }


}

export { Input };
