import { Rect, Size, Vector2, Text, Sprite, Sound, Keys, Input, Scene, Layer, about, version, build, Display } from './bin/index.js';
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
export * from './bin/core/Info.js';
export * from './bin/math/Vector2.js';
export * from './bin/coffee/Sprite.js';
export * from './bin/math/Size.js';
export * from './bin/coffee/Rect.js';
export * from './bin/coffee/Text.js';
export * from './bin/core/Display.js';
export * from './bin/core/input/Keys.js';
export * from './bin/core/input/Input.js';
export * from './bin/core/sound/Sound.js';
export * from './bin/core/Layer.js';
export * from './bin/core/Scene.js';
