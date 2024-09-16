import { Vec2 } from '../../math/Vec2.js';
var Input = /** @class */ (function () {
    function Input() {
        window.addEventListener("keydown", function (e) {
            Input.keysPressed[e.keyCode] = true;
        });
        window.addEventListener("keyup", function (e) {
            Input.keysPressed[e.keyCode] = false;
        });
        window.addEventListener("pointermove", function (e) {
            Input.mouseBtnsPressed[e.button] = true;
            Input.mousePos.x = e.x;
            Input.mousePos.y = e.y;
        });
    }
    Input.KeyPressed = function (key) {
        return !!this.keysPressed[key];
    };
    Input.MouseBtnPressed = function (btn) {
        return !!this.mouseBtnsPressed[btn];
    };
    Input.keysPressed = {};
    Input.mouseBtnsPressed = {};
    Input.mousePos = new Vec2();
    return Input;
}());
export { Input };
//# sourceMappingURL=Input.js.map