/**
 * @author nikeedev
 *
 * @license MIT
 * @type {HTMLCanvasElement}
 *
 * @description This is datatype for storing **width** and **height** in a variable/const/let
 *
*/
class Size {
    width;
    height;
    constructor(width, height) {
        this.width = (width === undefined) ? 0 : width;
        this.height = (height === undefined) ? 0 : height;
    }
    combine(size1, size2) {
        return new Size(size1.width + size2.width, size1.height + size2.height);
    }
}
export { Size };
