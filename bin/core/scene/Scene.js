/**
 * @description Creating a scene that can later be added to a game.
 *
 * @since 0.6.0
*/
var Scene = /** @class */ (function () {
    function Scene() {
        this.ClearScreen = false;
    }
    Scene.prototype.clear = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Scene;
}());
export { Scene };
//# sourceMappingURL=Scene.js.map