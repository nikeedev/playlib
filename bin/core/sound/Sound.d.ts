declare class Sound {
    audio_file: string;
    sond: any;
    loop: boolean;
    autoplay: boolean;
    constructor(audio_file: string);
    init(): Promise<unknown>;
    play(): void;
    pause(): void;
}
export { Sound };
