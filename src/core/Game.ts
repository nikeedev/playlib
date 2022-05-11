
class Game {
    game_name: string  | undefined;
    game_version: string | undefined;
    parent_element: string;
    canvas_style: string | undefined;
    width: number;
    height: number;
    useOwnCanvas: boolean;
    canvas: any | undefined;
    context: any | undefined;
    scene: any;
    constructor(config: any) {
        this.game_name = typeof this.game_name == 'string'? this.game_name : null;
        this.game_version = typeof this.game_version == 'string'? this.game_version : null;
        this.parent_element = config.parent_element;
        this.canvas_style = typeof this.canvas_style == 'string'? this.canvas_style : null;
        this.width = config.height;
        this.height = config.width;
        this.useOwnCanvas = config.useOwnCanvas;
        this.scene = config.scene;

        if (this.useOwnCanvas) {
            this.canvas = config.canvas;
            this.context = this.canvas.getContext('2d')
        } else {
            this.canvas = document.querySelector(this.parent_element).append(document.createElement('canvas'));
        }

        window.onload = () => {
            this.scene.create();
            this.scene.update();
        };

    }
}

export { Game };

