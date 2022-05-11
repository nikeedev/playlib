declare class Game {
    game_name: string | undefined;
    game_version: string | undefined;
    parent_element: string;
    canvas_style: string | undefined;
    width: number;
    height: number;
    useOwnCanvas: boolean;
    canvas: any | undefined;
    context: any | undefined;
    scene: any;
    constructor(config: any);
}
export { Game };
