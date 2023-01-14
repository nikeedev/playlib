import { Vector2 } from '../math/Vector2.js';
declare class GameObject {
    position: Vector2;
    protected screenSize: Vector2;
    constructor(position: Vector2, screenSize: Vector2);
    draw(ctx: any): void;
}
export { GameObject };
