
class Input {
    static keysPressed = {}

    constructor() {
        window.addEventListener("keydown", e => {
            Input.keysPressed[e.keyCode] = true;
        })

        window.addEventListener("keyup", e => {
            Input.keysPressed[e.keyCode] = false;
        })
    }

    static GetKeyDown(key: any) {
        return !!this.keysPressed[key];
    }
}

export { Input };
