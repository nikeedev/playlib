/**
 * @description Creates new game
 * @since 0.4.0
 */
declare class Game {
    private game_name;
    private game_version;
    private parent_element;
    private style;
    width: number;
    height: number;
    private useOwnCanvas;
    canvas: any | undefined;
    context: any | undefined;
    deltaTime: number;
    private oldTimeStamp;
    private fps;
    private fps_on;
    private game_type;
    constructor(config: any);
    create(func: any): void;
    update(func: any): void;
    clear(ctx: any): void;
    showFPS(is_on: boolean): void;
}
export { Game };
