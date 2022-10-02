/**
 * @description Creating a scene that can later be added to a game.
 *
 * @since 0.6.0
*/
declare class Scene {
    ClearScreen: boolean | undefined;
    create(ctx: any): void;
    update(ctx: any, deltaTime: number): void;
}
export { Scene };
