import { Rect, Size, Text } from '../../GameEngine.js';
class Object {
    type;
    src;
    text;
    position;
    size;
    screenSize;
    obj;
    constructor(type, src = "", text = "", position, size = new Size(0, 0), screenSize) {
        this.type = type;
        this.src = typeof src == 'string' ? src : "";
        this.text = typeof text == 'string' ? text : "";
        this.position = position;
        this.size = typeof size == Size ? size : new Size(0, 0);
        this.screenSize = screenSize;
    }
    load() {
        if (this.type.toLowerCase().trim() == "rect") {
            this.obj = new Rect(this.position, this.size, this.screenSize);
        }
        else if (this.type.toLowerCase().trim() == "text") {
            this.obj = new Text(this.text, this.position, this.screenSize);
        }
        else if (this.type.toLowerCase().trim() == "text") {
            this.obj = new Text(this.text, this.position, this.screenSize);
        }
    }
}
export { Object };
