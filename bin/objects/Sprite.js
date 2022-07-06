import { GameObject } from './GameObject.js';
function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}
class Sprite extends GameObject {
    imageSrc;
    image;
    style;
    constructor(imageSrc, position, /*size: Size = null*/ screenSize) {
        super(position, screenSize);
        this.imageSrc = imageSrc;
        //this.size = typeof size != null ? size : null;
        loadImage(imageSrc).then(img => this.image = img);
    }
    async init() {
        // Load the image
        const img = await loadImage(this.imageSrc);
        return this.image = img;
    }
    draw(ctx) {
        this.image.style.image_rendering = "auto";
        this.image.style = this.style;
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}
export { Sprite };
