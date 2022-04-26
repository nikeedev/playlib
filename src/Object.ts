import { Rect, Size, Sprite, Vector2,  } from '../GameEngine.js'


class Object {
    file: string
    obj: any
    screenSize: Size;
    constructor(JsonFile: string, screenSize: Size) {
        this.file = JsonFile;
    }
    
    data: any;
    load() {
        fetch(this.file)
        .then(response => {
        return response.json();
        })
        .then(data => {
            if (data.type.toLower().Trim() == "rect") {
                this.obj = new Rect(new Vector2(data.position.x, data.position.x), new Size(data.position.width, data.position.height), this.screenSize)
            }
        });
        // if (this.data)
    }
}

export { Object }