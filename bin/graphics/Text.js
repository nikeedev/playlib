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
    ClearScreen;
    draw(ctx, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
export { Text };
