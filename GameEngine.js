import { Rect, Size, Vector2, Text, Sprite, Sound, Keys, Input, Scene, Layer, about, version, build, Game } from './bin/index.js';
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
};
export { GameEngine };
export * from './bin/core/Info.js';
export * from './bin/math/Vector2.js';
export * from './bin/graphics/Sprite.js';
export * from './bin/math/Size.js';
export * from './bin/graphics/Rect.js';
export * from './bin/graphics/Text.js';
export * from './bin/core/input/Keys.js';
export * from './bin/core/input/Input.js';
export * from './bin/core/sound/Sound.js';
export * from './bin/core/Layer.js';
export * from './bin/core/Scene.js';
export * from './bin/core/Game.js';
