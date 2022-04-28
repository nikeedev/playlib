import { Rect, Size, Sprite, Vector2, Text } from '../GameEngine.js'


class Object {
    type: string;
    src: string | undefined
    text: string | undefined;
    position: Vector2;
    size: Size | undefined;
    screenSize: Size;
    obj: any;
    constructor(type: string, src: string = "", text: string = "", position: Vector2, size: Size = new Size(0, 0), screenSize: Size) {
        this.type = type;
        this.src = typeof src == 'string' ? src : "";
        this.text = typeof text == 'string' ? text : "";
        this.position = position;
        this.size = typeof size == Size ? size : new Size(0, 0);
        this.screenSize = screenSize;
    }

    load() {
        if (this.type.toLowerCase().trim() == "rect") {
            this.obj = new Rect(this.position, this.size, this.screenSize)
        } 
        else if (this.type.toLowerCase().trim() == "text") {
            this.obj = new Text(this.text, this.position, this.screenSize)
        }
        else if (this.type.toLowerCase().trim() == "text") {
            this.obj = new Text(this.text, this.position, this.screenSize)
        }
    }
}

export { Object }