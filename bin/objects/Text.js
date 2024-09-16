var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GameObject } from './GameObject.js';
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(text, position, screenSize) {
        var _this = _super.call(this, position, screenSize) || this;
        _this.color = "#ffffff";
        _this.font = "20px Arial";
        _this.text = text;
        return _this;
    }
    Text.prototype.draw = function (ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.position.x, this.position.y);
    };
    return Text;
}(GameObject));
export { Text };
//# sourceMappingURL=Text.js.map