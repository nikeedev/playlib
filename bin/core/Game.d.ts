declare class Game {
    name: string;
    version: string;
    required_modules: object;
    constructor(config: object);
    loadGame(): void;
}
export { Game };
