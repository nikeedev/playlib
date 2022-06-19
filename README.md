# **PlayLib**: A 2D game library made using HTML Canvas!
![npm](https://img.shields.io/npm/v/@nikee_dev/PlayLib_js?color=Green&label=Current%20package%20version&style=flat-square)

## **The engine is still under development!**

### Quick Setup and Start:

Desire your way of downloading the library, either using npm or trough GitHub, i preferably  will use npm.


<br>
Choose your location where you want to start your game and use

`npm init`
 to initialize your folder for npm.
 Next, use `npm install PlayLib` to install the library.

 Then create all needed files for your web game, like a HTML file and a main JavaScript file. 

Import the library using this line of code: `import { PlayLib } from '/path/to/PlayLib.js'`. Use `PlayLib` to gather the engine, and its classes and functions. You can also manually write classes and variables you want to import, instead of having all of them in `PlayLib` variable. Use this way if you prefer so: `import { Rect, Vector2, version, about } from '/path/to/PlayLib.js'`

Now your ready for coding!

Need help to know classes, click on this button to head over features tab: [Features](#features).
   
<br>

### Examples:
**All examples to current features are available on examples folder (GitHub), or on** https://nikeedev.github.io/PlayLib_js

### Features:

**A game library making website games that implements Canvas API, and has many useful functions and classes. Will be added more functions and features further!**

**Classes:**
 - ```ts 
    var name = new GameLib.Rect(position: Vector2, size: Size, screenSize: Size);
   ```
   - Rect class draws you a rectangle into the canvas, you can change its position, size, and current screen size( for it to work )

<br>

- ```ts 
   var name = new GameLib.Text(text: string, position: Vector2, screenSize: Size);
  ```
  - Text class draws you a text block into the canvas, you can change its text, position and current screen size( for it to work )

<br>

- ```ts
   var name = new GameLib.Vector2(x: number, y: number);
  ```
  - Vector2 class for position for other classes. Can be used without the drawing classes.
  
<br>

- ```ts
   var name = new GameLib.Size(width: number, height: number);
  ```
  - Size class for sizing numbers for other classes. Can be used without the drawing classes.
  
<br> 

- ```ts
   var name = new GameLib.Sprite(imageSrc: string, position: Vector2, ScreenSize: Size);
  ```
  - Sprite class draws a sprite/image into canvas, you can change its source location of image, position and current screen size( for it to work ). You must first initialize sprite, before you can draw it.
  
<br>

- ```ts
   var name = new GameLib.Sound();
  ```
  - Sound class makes it easy to play audio on your app/game!

<br>

### License:

**This project is licensed with the MIT LICENSE. Please follow additional info about it, at LICENSE file.**

