/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * @description This is datatype for storaging **width** and **height** in a variable/const/let
 * 
*/


class Vector2 {
	constructor(x, y) {
		this.x = (x === undefined) ? 0 : x;
		this.y = (x === undefined) ? 0 : y;
	}
	combine(Vec1, Vec2) {
		return new Vector2(Vec1.width + Vec2.width, Vec1.height + Vec2.height);
	}
}



export { Vector2 };

