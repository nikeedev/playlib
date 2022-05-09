### **Changelog for GameEngine.js**
----
**v0.1.0** (Actually many of the stuff has been added separately, but i haven't any changelog before now, so here is all of stuff added before changelog): Size datatype for height and width; Vector2 datatype for x and y axis; Text class for making text, change its color, position and font; Rect class for making rectangles in any size and shape, has same abilities as Text class, unless the font variable; Info class for gathering current GameEngine.js version and print GameEngine.js logotype.

**v0.1.7**: Moved to `TypeScript`, and fixed stuff so the code works even with TypeScript.

**v0.2.0**: Added new `Sprite` class to the modules, to draw your fav sprites, instead of simple rects and texts.

**v0.2.2**: Fixed the new Sprite class. The Sprite class unless other classes, must be initialized, because else the sprite will be drawn before it could even load it, resulting, that it will draw nothing. 

**v0.2.3**: Added update function back to Sprite class.

**v0.2.3.1**: Made so you can now import all classes from one single file, called GameEngine.js :)

**v0.2.4**: Added new `Screen` class to the modules, to create a canvas and get 2D context for you.

**v0.2.5**: Added `Input` class and `Keys` list to the modules, to check if a key is down or not. Keys list could be used together with Input class like this: `if (Input.GetKeyDown(Keys.ArrowRight)) ...` :)

**v0.2.8**: Moved from GitHub to npm package, use `npm i @nikee_dev/gameengine_js`! 

**v0.2.9**: Updated some stuff for `npm` to work.

**v0.2.13**: Changed look of `src` folder where typescript files lie.

**v0.2.14**: Added finally `Sound` class! Play audio with the engine more easier. When using the class, remember to use `init(url_or_path_to_audio)` to initialize the music and it's source location.

**0.3.0 (09.05.2022)**: Updated the way to import the module. Here is the diff:

```diff 
- import { any_class_or_variable_name, Rect } from '/path/to/GameEngine.js'
- new Rect()

+ import GameEngine from '/path/to/GameEngine.js'
+ new GameEngine.Graphics.Rect()
```
You need probably to write a bit more, but at least all classes and variables are in one place!

<br>
<br>
<span style="color: cornflowerblue;">Every update gets almost +1 example in the examples folder</span> 

![image-smile](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/310/grinning-face-with-big-eyes_1f603.png)
