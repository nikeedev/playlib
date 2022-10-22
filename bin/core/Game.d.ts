import { Scene } from './scene/Scene.js';
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
    private oldTimeStamp;
    private fps;
    private fps_on;
    scenes: any;
    current_scene: number;
    constructor(config: any, scenes: Scene[], current_scene?: number);
    update(): void;
    clear(): void;
    showFPS(is_on: boolean): void;
}
export { Game };
