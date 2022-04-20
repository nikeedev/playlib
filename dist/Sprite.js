function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}
class Sprite {
    imageSrc;
    position;
    //size: Size | undefined;
    screenSize;
    image;
    constructor(imageSrc, position, /*size: Size = null*/ screenSize) {
        this.imageSrc = imageSrc;
        this.position = position;
        //this.size = typeof size != null ? size : null;
        this.screenSize = screenSize;
        loadImage(imageSrc).then(img => this.image = img);
    }
    async init() {
        // Load the image
        const img = await loadImage(this.imageSrc);
        return this.image = img;
    }
    draw(ctx, ClearScreen) {
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
    update(ctx, func, ClearScreen) {
        const updateMethod = () => {
            func();
            if (ClearScreen)
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.drawImage(this.image, this.position.x, this.position.y);
            requestAnimationFrame(updateMethod);
        };
        requestAnimationFrame(updateMethod);
    }
}
export { Sprite };
