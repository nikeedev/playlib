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
	normalize() {
		const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
  		this.x /= magnitude;
  		this.y /= magnitude;
	}
	magnitude() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}
	lerp(v1:Vector2, v2:Vector2, t:number) {
		const x = v1.x * (1 - t) + v2.x * t;
		const y = v1.y * (1 - t) + v2.y * t;
		return new Vector2(x, y);
	};
}



export { Vector2 };

