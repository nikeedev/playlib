import { Vector2 } from '../../math/Vector2.js';
class Event {
    static keysPressed = {};
    static mouseBtnsPressed = {};
    static mousePos = new Vector2();
    /////// Controller
    controllers;
    controller;
    constructor() {
        window.addEventListener("keydown", e => {
            Event.keysPressed[e.keyCode] = true;
        });
        window.addEventListener("keyup", e => {
            Event.keysPressed[e.keyCode] = false;
        });
        window.addEventListener("pointermove", e => {
            Event.mouseBtnPressed[e.button] = true;
            Event.mousePos.x = e.x;
            Event.mousePos.y = e.y;
        });
    }
    static KeyPressed(key) {
        return !!this.keysPressed[key];
    }
    static mouseBtnPressed(btn) {
        return !!this.mouseBtnsPressed[btn];
    }
    updateControllers() {
        this.controllers = navigator.getGamepads();
        this.controller = this.controllers[0];
    }
}
export { Event };
