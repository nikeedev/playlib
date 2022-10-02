/**
 * @description Creating a scene that can later be added to a game.
 *
 * @since 0.6.0
*/
declare class Scene {
    canvas: any;
    ClearScreen: boolean | undefined;
    constructor(canvas: any);
    create(ctx: any): void;
    update(ctx: any): void;
}
export { Scene };
