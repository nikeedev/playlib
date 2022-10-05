import { Keys } from './Keys.js'
import { Vector2 } from '../../math/Vector2.js'


class Event {
    static keysPressed = {}
    static mouseBtnsPressed = {}

    static mousePos: Vector2 = new Vector2();

    constructor() {
        window.addEventListener("keydown", e => {
            Event.keysPressed[e.keyCode] = true;
        })

        window.addEventListener("keyup", e => {
            Event.keysPressed[e.keyCode] = false;
        })

        window.addEventListener("pointermove", e => {
            Event.mouseBtnPressed[e.button] = true;

            Event.mousePos.x = e.x;
            Event.mousePos.y = e.y;
        })

        
    }

    static KeyPressed(key: Keys) {
        return !!this.keysPressed[key];
    }
    
    static mouseBtnPressed(btn: any) {
        return !!this.mouseBtnsPressed[btn];
    }


}

export { Event };
