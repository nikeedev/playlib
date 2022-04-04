/**
 * @author nikeedev
 *
 * @license MIT
 * @type {HTMLCanvasElement}
 *
 *
 *
*/
class Text {
    text;
    position;
    screenSize;
    constructor(text, position, screenSize) {
        this.text = text;
        this.position = position;
        this.screenSize = screenSize;
    }
    color = "#000000";
    font = "20px Arial";
    draw(ctx, ClearScreen) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
    looping;
    update(ctx, func, ClearScreen, looping = true) {
        this.looping = typeof looping == 'boolean' ? looping : true;
        const updateMethod = () => {
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen)
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillText(this.text, this.position.x, this.position.y);
            if (this.looping)
                requestAnimationFrame(updateMethod);
        };
        requestAnimationFrame(updateMethod);
    }
}
export { Text };
