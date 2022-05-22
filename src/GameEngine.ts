import { Rect, Size, Vector2, Text, Sprite, Sound, Keys, Input, Scene, Layer, about, version, build, Game } from './index.js';

const GameEngine = {
    Graphics: {
        Rect: Rect,
        Sprite: Sprite,
        Text: Text
    },
    Info: {
        about: about,
        version: version,
        build: build
    },
    Sound: Sound,
    Vector2: Vector2,
    Size: Size,
    Keys: Keys,
    Input: Input,
    Scene: Scene,
    Layer: Layer,
    Game: Game
}

export { GameEngine };

export * from './core/Info.js';
export * from './math/Vector2.js';
export * from './graphics/Sprite.js';
export * from './math/Size.js';
export * from './graphics/Rect.js';
export * from './graphics/Text.js';
export * from './core/input/Keys.js';
export * from './core/input/Input.js';
export * from './core/sound/Sound.js';
export * from './core/Layer.js';
export * from './core/Scene.js';
export * from './core/Game.js';
