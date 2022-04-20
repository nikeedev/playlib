/** 
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 * 
*/


class Vector2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = (x === undefined) ? 0 : x;
		this.y = (x === undefined) ? 0 : y;
	}
	combine(Vec1 : Vector2, Vec2 : Vector2) {
		return new Vector2(Vec1.x + Vec2.x, Vec1.y + Vec2.y);
	}
}



export { Vector2 };

