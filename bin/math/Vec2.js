/**
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 *
*/
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.normalize = function () {
        var magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
        this.x /= magnitude;
        this.y /= magnitude;
    };
    Vec2.prototype.magnitude = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2.prototype.lerp = function (v1, v2, t) {
        var x = v1.x * (1 - t) + v2.x * t;
        var y = v1.y * (1 - t) + v2.y * t;
        return new Vec2(x, y);
    };
    ;
    return Vec2;
}());
export { Vec2 };
//# sourceMappingURL=Vec2.js.map