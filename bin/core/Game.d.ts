/**
 * @description Creates new game
 * @since 0.4.0
 */
declare class Game {
    private game_name;
    private game_version;
    private parent_element;
    private style;
    private width;
    private height;
    private useOwnCanvas;
    canvas: any | undefined;
    context: any | undefined;
    constructor(config: any);
    create(func: any): void;
    update(func: any): void;
    setScreenMode(mode: string): void;
    clear(ctx: any): void;
}
export { Game };
