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
export default GameEngine;
