
/**
 * @description Not working class yet.
 * 
 * @since Version not targeted yet
*/

import { Event } from '../event/Event.js'

class Scene
{
    canvas: any;
    private ClearScreen: boolean | undefined;

    deltaTime: number;
    private oldTimeStamp: number;

    constructor(canvas: any)
    {
        this.canvas = canvas;
    }
    
    create(func: any, ClearScreen: boolean = true) {
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        var context = this.canvas.getContext('2d');
        if (ClearScreen) 
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        func(context);

    }

    update(func: any, ClearScreen: boolean = true) {
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        var context = this.canvas.getContext('2d');

        const eventer = new Event();
        
        const gameLoop = (timeStamp: any) => 
        {

            eventer.updateControllers();

            // Calculate the number of seconds passed since the last frame
            this.deltaTime = (timeStamp - this.oldTimeStamp) / 1000;
            this.oldTimeStamp = timeStamp;
    
        
            if (ClearScreen) 
                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
            // The loop function has reached it's end. Keep requesting new frames
            window.requestAnimationFrame(gameLoop);
        }

        window.requestAnimationFrame(gameLoop);
    }

    clear() {
        var context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    
}


export { Scene };
