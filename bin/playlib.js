import { about, VERSION } from './core/Info.js';
import { Vec2, math } from './math/index.js';
import { GameObject, Rect, Sprite, Text } from './objects/index.js';
import { Data, Game, Keys, Scene, Input, Sound } from './core/index.js';
new Input();
about();
/**
 * Playlib
 */
export var Playlib = {
    about: about,
    version: VERSION,
    Vec2: Vec2,
    Game: Game,
    Input: Input,
    Keys: Keys,
    Scene: Scene,
    Sound: Sound,
    Sprite: Sprite,
    Rect: Rect,
    Text: Text,
    GameObject: GameObject,
    Data: Data,
    math: math,
};
//# sourceMappingURL=playlib.js.map