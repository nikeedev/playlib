import { Keys } from './Keys.js'
import { Vector2 } from '../../math/Vector2.js'


class Input {
    static keysPressed = {}
    static mouseBtnsPressed = {}

    static mousePos: Vector2 = new Vector2();

    constructor() {
        window.addEventListener("keydown", e => {
            Input.keysPressed[e.keyCode] = true;
        })

        window.addEventListener("keyup", e => {
            Input.keysPressed[e.keyCode] = false;
        })

        window.addEventListener("pointermove", e => {
            Input.mouseBtnPressed[e.button] = true;

            Input.mousePos.x = e.x;
            Input.mousePos.y = e.y;
        })

        
    }

    static KeyPressed(key: Keys) {
        return !!this.keysPressed[key];
    }
    
    static mouseBtnPressed(btn: any) {
        return !!this.mouseBtnsPressed[btn];
    }


}

export { Input };
