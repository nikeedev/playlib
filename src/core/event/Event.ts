
class Event {
    static keysPressed = {}
    static mouseBtnsPressed = {}

    constructor() {
        window.addEventListener("keydown", e => {
            Event.keysPressed[e.keyCode] = true;
        })

        window.addEventListener("keyup", e => {
            Event.keysPressed[e.keyCode] = false;
        })

        window.addEventListener("mousemove", e => {
            Event.mouseBtnsPressed[e.button] = true;
        })

        window.addEventListener("mousemove", e => {
            Event.mouseBtnsPressed[e.button] = false;
        })
    }

    static KeyPressed(key: any) {
        return !!this.keysPressed[key];
    }
    
    static mouseBtnPressed(btn: any) {
        return !!this.mouseBtnsPressed[btn];
    }
}

export { Event };
