import { about } from './core/Info.js';
import { Vec2 } from './math/index.js';
import { GameObject, Rect, Sprite, Text } from './objects/index.js';
import { Game, Keys, Scene, Input, Sound } from './core/index.js';
/**
 * Playlib
 */
export declare const Playlib: {
    about: typeof about;
    version: string;
    Vec2: typeof Vec2;
    Game: typeof Game;
    Input: typeof Input;
    Keys: typeof Keys;
    Scene: typeof Scene;
    Sound: typeof Sound;
    Sprite: typeof Sprite;
    Rect: typeof Rect;
    Text: typeof Text;
    GameObject: typeof GameObject;
    Data: {
        loadedFiles: any[];
        getFromCookie(name: string): string;
        saveToCookie(data: any, name: string): void;
        clearCookies(): void;
        loadJSONFile(filePath: string): Promise<any>;
    };
    math: {
        floor(_num: number, amount?: number): number;
    };
};
