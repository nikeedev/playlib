import { Rect, Size, Vector2, Text, Sprite, Sound, Input, Scene, Layer, about, Display } from './bin/index.js';
declare const GameEngine: {
    Graphics: {
        Rect: typeof Rect;
        Sprite: typeof Sprite;
        Text: typeof Text;
    };
    Info: {
        about: typeof about;
        version: string;
        build: string;
    };
    Sound: typeof Sound;
    Vector2: typeof Vector2;
    Size: typeof Size;
    Keys: {
        ArrowUp: string;
        ArrowDown: string;
        ArrowRight: string;
        ArrowLeft: string;
        W: string;
        A: string;
        S: string;
        D: string;
        E: string;
    };
    Input: typeof Input;
    Scene: typeof Scene;
    Layer: typeof Layer;
    Display: typeof Display;
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
