class Vector2 {
	constructor(x, y) {
		this.x = (x === undefined) ? 0 : x;
		this.y = (y === undefined) ? 0 : y;
	}
	add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
	subtract(vector) {
		this.x -= vector.x;
        this.y -= vector.y;
        return this;
	}
}


class GameScreen {
	constructor({width, height}) {
		var canvas = document.querySelector('body').appendChild(document.createElement('canvas'));
		canvas.width = width;
		canvas.width = height;
		canvas.style += "border: 1px solid black"
	}
}


export default {Vector2, GameScreen};
