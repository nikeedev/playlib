/** 
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
}



export { Size };

