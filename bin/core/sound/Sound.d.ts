declare class Sound {
    sond: any;
    loop: boolean;
    constructor();
    init(audio_file: string): Promise<unknown>;
    play(): void;
    pause(): void;
}
export { Sound };
