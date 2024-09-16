

/**
 * @description Creating a scene that can later be added to a game.
 * 
 * @since 0.6.0
*/

abstract class Scene
{
    canvas: HTMLCanvasElement;

    ClearScreen: boolean = false;
    
    abstract create(ctx: any)

    abstract update(ctx: any, deltaTime: number)

    clear() {
        let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
}


export { Scene };
