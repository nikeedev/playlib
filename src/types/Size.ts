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
	width: number;
	height: number;
	constructor(width: number | undefined, height: number | undefined) {
		this.width = (width === undefined) ? 0 : width;
		this.height = (height === undefined) ? 0 : height;
	}
	combine(size1: Size, size2: Size) {
		return new Size(size1.width + size2.width, size1.height + size2.height);
	}
}



export { Size };

