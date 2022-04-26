import { Rect, Size, Vector2, } from '../GameEngine.js';
class Object {
    file;
    obj;
    screenSize;
    constructor(JsonFile, screenSize) {
        this.file = JsonFile;
    }
    data;
    load() {
        fetch(this.file)
            .then(response => {
            return response.json();
        })
            .then(data => {
            if (data.type.toLower().Trim() == "rect") {
                this.obj = new Rect(new Vector2(data.position.x, data.position.x), new Size(data.position.width, data.position.height), this.screenSize);
            }
        });
        // if (this.data)
    }
}
export { Object };
