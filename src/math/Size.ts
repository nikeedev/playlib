/** 
 * @description This is datatype for storing **width** and **height** in a variable/const/let
 * 
*/


class Size {
	width: number = 0;
	height: number = 0;
	constructor(width?: number, height?: number) {
		this.width = typeof width !== 'number' ? 0 : width;
		this.height = typeof height !== 'number' ? 0 : height;
	}
}


export { Size };
