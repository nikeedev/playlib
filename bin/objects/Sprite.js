import { Size } from '../math/Size';
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
    constructor(imageSrc, position, screenSize, imageSize = new Size()) {
        super(position, screenSize);
        this.imageSrc = imageSrc;
        this.imageSize.width = this.imageSize.width == 0 ? this.image.naturalWidth : this.imageSize.width;
        this.imageSize.height = this.imageSize.height == 0 ? this.image.naturalHeight : this.imageSize.height;
        loadImage(imageSrc).then(img => this.image = img);
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
