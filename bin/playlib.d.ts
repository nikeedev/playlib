import { Game, Keys, Vector2, Size, Scene, Sound, Sprite, about, Input, Rect, Text, GameObject } from "./index.js";
/**
 * Playlib
 */
declare const Playlib: {
    about: typeof about;
    version: string;
    Vector2: typeof Vector2;
    Size: typeof Size;
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
export { Playlib };
