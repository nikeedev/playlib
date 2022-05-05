
class Sound {
    sond: any;
    loop: boolean = false;

    constructor() {
        document.cookie = "promo_shown=1; Max-Age=2600000; Secure"        
    }

    async init(audio_file: string) {
        var snd = new Audio();
        return new Promise((resolve, reject) => {
            snd.preload = "auto";                      // intend to play through
            snd.autoplay = true;                       // autoplay when loaded
            snd.onerror = reject;                      // on error, reject
            snd.onended = resolve;                     // when done, resolve
            snd.loop = this.loop;

            snd.src = audio_file; // just for example
            this.sond = snd;
        });
    }
    
    play() {
        this.sond.loop = this.loop;
        window.addEventListener('click', ()=>{
            this.sond.play();
        });  
    }

    pause() {
        this.sond.loop = this.loop;
        this.sond.pause();
    }
}

export { Sound }
