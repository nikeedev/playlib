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
    style = "";
    constructor(imageSrc, position, screenSize) {
        super(position, screenSize);
        this.imageSrc = imageSrc;
    }
    async init() {
        // Load the image
        const img = await loadImage(this.imageSrc);
        img.style.imageRendering += "pixelated";
        this.image = img;
        console.log(this.image);
    }
    async draw(ctx, imageSize) {
        // console.log(this.image)
        if (imageSize === undefined) {
            ctx.drawImage(this.image, this.position.x, this.position.y);
        }
        else {
            ctx.drawImage(this.image, this.position.x, this.position.y, imageSize.width, imageSize.height);
        }
    }
}
export { Sprite };
