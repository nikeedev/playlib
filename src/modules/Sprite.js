/**
 * @author nikeedev
 *
 * @license MIT
 * @type {HTMLCanvasElement}
 *
 *
 *
*/
class Sprite {
    imageSrc;
    position;
    //size: Size | undefined;
    screenSize;
    constructor(imageSrc, position, /*size: Size = null*/ screenSize) {
        this.imageSrc = imageSrc;
        this.position = position;
        //this.size = typeof size != null ? size : null;
        this.screenSize = screenSize;
    }
    color = "#000000";
    image = document.querySelector('body').appendChild(document.createElement("img"));
    draw(ctx, ClearScreen) {
        this.image.src = "./" + this.imageSrc;
        this.image.style.display = "none";
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.drawImage(this.image, this.position.x, this.position.y);
    } /*
    looping: boolean | undefined;
    update(ctx: any, func: any, ClearScreen: any, looping = true) {
        this.looping = typeof looping == 'boolean'? looping : true;
        const updateMethod = () => {
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen)
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);
    }*/
}
export { Sprite };
