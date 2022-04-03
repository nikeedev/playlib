/**
 * @author nikeedev
 *
 * @license MIT
 * @type {HTMLCanvasElement}
 *
 *
 *
*/
class Rect {
    position;
    size;
    screenSize;
    constructor(position, size, screenSize) {
        this.position = position;
        this.size = size;
        this.screenSize = screenSize;
    }
    color = "#000000";
    draw(ctx, ClearScreen) {
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    looping;
    update(ctx, func, ClearScreen, looping = true) {
        this.looping = typeof looping == 'boolean' ? looping : true;
        const updateMethod = () => {
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen)
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            if (this.looping)
                requestAnimationFrame(updateMethod);
        };
        requestAnimationFrame(updateMethod);
    }
}
export { Rect };
