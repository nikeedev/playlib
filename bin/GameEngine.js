import { Rect, Size, Vector2, Text, Sprite, Sound, Keys, Input, Scene, Layer, about, version, build, Display } from './index.js';
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
    Display: Display
};
export { GameEngine };
export * from './core/Info.js';
export * from './math/Vector2.js';
export * from './coffee/Sprite.js';
export * from './math/Size.js';
export * from './coffee/Rect.js';
export * from './coffee/Text.js';
export * from './core/Display.js';
export * from './core/input/Keys.js';
export * from './core/input/Input.js';
export * from './core/sound/Sound.js';
export * from './core/Layer.js';
export * from './core/Scene.js';
