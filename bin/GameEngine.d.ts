import { Rect, Size, Vector2, Text, Sprite, Sound, Input, Scene, Layer, about, Display } from './index.js';
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
