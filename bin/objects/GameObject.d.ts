import { Vec2 } from '../math/Vec2.js';
declare class GameObject {
    position: Vec2;
    protected screenSize: Vec2;
    constructor(position: Vec2, screenSize: Vec2);
    draw(ctx: any): void;
}
export { GameObject };
