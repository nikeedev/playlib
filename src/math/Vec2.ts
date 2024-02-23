/** 
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 * 
*/


class Vec2 {
	x: number;
	y: number;
	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}
	normalize() {
		const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
		this.x /= magnitude;
		this.y /= magnitude;
	}
	magnitude() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	lerp(v1: Vec2, v2: Vec2, t: number) {
		const x = v1.x * (1 - t) + v2.x * t;
		const y = v1.y * (1 - t) + v2.y * t;
		return new Vec2(x, y);
	};
}



export { Vec2 };

