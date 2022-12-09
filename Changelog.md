### **Changelog for Playlib**
----
**v0.1.0** (Actually many of the stuff has been added separately, but i haven't any changelog before now, so here is all of stuff added before changelog): Size datatype for height and width; Vector2 datatype for x and y axis; Text class for making text, change its color, position and font; Rect class for making rectangles in any size and shape, has same abilities as Text class, unless the font variable; Info class for gathering current PlayLib version and print PlayLib logotype.

**v0.1.7**: Moved to `TypeScript`, and fixed stuff so the code works even with TypeScript.

**v0.2.0**: Added new `Sprite` class to the modules, to draw your fav sprites, instead of simple rects and texts.

**v0.2.2**: Fixed the new Sprite class. The Sprite class unless other classes, must be initialized, because else the sprite will be drawn before it could even load it, resulting, that it will draw nothing. 

**v0.2.3**: Added update function back to Sprite class.

**v0.2.3.1**: Made so you can now import all classes from one single file, called PlayLib :)

**v0.2.4**: Added new `Screen` class to the modules, to create a canvas and get 2D context for you.

**v0.2.5**: Added `Input` class and `Keys` list to the modules, to check if a key is down or not. Keys list could be used together with Input class like this: `if (Input.KeyDownPressed(Keys.ArrowRight)) ...` :)

**v0.2.8**: Moved from GitHub to npm package, use `npm i @nikee_dev/PlayLib`! 

**v0.2.9**: Updated some stuff for `npm` to work.

**v0.2.13**: Changed look of `src` folder where typescript files lie.

**v0.2.14**: Added finally `Sound` class! Play audio with the engine more easier. When using the class, remember to use `init(url_or_path_to_audio)` to initialize the music and it's source location.

**v0.3.0 & v0.3.01 & v0.3.1 & v0.3.2 (09.05.2022)**: Updated and added a new way to import the module. Here is the new way:


```ts
// New way:
import { Playlib } from '/path/to/Playlib.js'
new Rect()

new Playlib.Rect()
```
You need probably to write a bit more with the new way, but at least all classes and variables are in one place!

<br>

**0.4.0 (17.05.2022)**: Big Update, Big Changes! Here is a list of updated stuff:

- Added finally `Game` class, which is responsible for starting, updating and doing canvas jobs. 
- Added `clear()` function to it. 
- Updated the way graphics classes draw (Text, Rect, Sprite classes), so you need to write `draw()` and use `Game` class to update canvas. 
- Added even more keys to check for input in `Keys` object.

<br>

**0.5.3 (06.07.2022)**: Updated `update()` and `create()` methods from Game class. Now you can access 2D context from canvas by calling `update()` or `create()` method and when creating new function inside the method add name of context (any name, i like to use ctx :), so the called method will look something like this:

```ts
game.update((ctx) => {
    square_object.draw(ctx);
})
```

In this new update we changed location of when true or false whether you want to clear the screen (refresh it)
You did it before by writing true or false after giving context to draw the object, but now you can give it when calling `update()` or `create()` method and add true or false after giving the method a function

- By default is parameter true, so if you wish for those methods to *do* "clear screen", you can leave the parameter empty, but if you want the opposite, just set the parameter to false.

<br>

After v0.5.3:
  - Updated and added Scene class
  - Updated massively Game class 
  - Added finally functionality for scene class
  - You can now "extend" (really implement, but that's not TypeScript...)
    the scene class to your own to create scenes that can later be used to change order on which to render first.
  - Fixed issue with scene not clearing the screen.
  - Fixed all other stuff.
  - Fixed issue with canvas being cleared because of resizing. Now fixed
    
  


