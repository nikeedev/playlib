import { Size } from '../math/Size.js';
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
    imageSize;
    image;
    style;
    constructor(imageSrc, position, screenSize, imageSize = new Size(0, 0)) {
        super(position, screenSize);
        this.imageSrc = imageSrc;
        this.init();
        this.imageSize.width = (typeof imageSize === undefined) ? this.image.naturalWidth : imageSize.width;
        this.imageSize.height = (typeof imageSize === undefined) ? this.image.naturalHeight : imageSize.height;
    }
    async init() {
        // Load the image
        const img = await loadImage(this.imageSrc);
        return this.image = img;
    }
    draw(ctx) {
        this.image.style.image_rendering = "pixelated";
        this.image.style += this.style;
        ctx.drawImage(this.image, this.position.x, this.position.y, this.imageSize.width, this.imageSize.height);
    }
}
export { Sprite };
