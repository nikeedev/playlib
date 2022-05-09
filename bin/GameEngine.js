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
export default GameEngine;
