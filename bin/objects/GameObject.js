class GameObject {
    position;
    screenSize;
    constructor(position, screenSize) {
        this.position = position;
        this.screenSize = screenSize;
    }
    ClearScreen;
    draw(ctx, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
    }
}
export { GameObject };
