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
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(position, size, screenSize, color) {
        var _this = _super.call(this, position, screenSize) || this;
        _this.color = "#ffffff";
        _this.size = size;
        _this.color = color;
        return _this;
    }
    Rect.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    };
    return Rect;
}(GameObject));
export { Rect };
//# sourceMappingURL=Rect.js.map