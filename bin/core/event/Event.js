class Event {
    static keysPressed = {};
    static mouseBtnsPressed = {};
    constructor() {
        window.addEventListener("keydown", e => {
            Event.keysPressed[e.keyCode] = true;
        });
        window.addEventListener("keyup", e => {
            Event.keysPressed[e.keyCode] = false;
        });
        window.addEventListener("mousemove", e => {
            Event.mouseBtnsPressed[e.button] = true;
        });
    }
    static KeyPressed(key) {
        return !!this.keysPressed[key];
    }
    static mouseBtnPressed(btn) {
        return !!this.mouseBtnsPressed[btn];
    }
}
export { Event };
