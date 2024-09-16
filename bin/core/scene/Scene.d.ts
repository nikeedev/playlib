/**
 * @description Creating a scene that can later be added to a game.
 *
 * @since 0.6.0
*/
declare abstract class Scene {
    canvas: HTMLCanvasElement;
    ClearScreen: boolean;
    abstract create(ctx: any): any;
    abstract update(ctx: any, deltaTime: number): any;
    clear(): void;
}
export { Scene };
