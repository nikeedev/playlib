# **GameEngine.js**: A 2D game engine made for using HTML Canvas!

## **Still Under Development!**



### Features:

**A game engine making website games that implements Canvas API, and has many useful functions and classes. Will be added more functions and features further!**

**List:**
 - ```ts 
    var name = new Rect(position: Vector2, size: Size, screenSize: Size);
   ```
   - Rect class draws you a rectangle into the canvas, you can change its position, size, and current screen size( for it to work )

<br>

- ```ts 
   var name = new Text(text: string, position: Vector2, screenSize: Size);
  ```
  - Text class draws you a text block into the canvas, you can change its text, position and current screen size( for it to work )

<br>

- ```ts
   var name = new Vector2(x: number, y: number);
  ```
  - Vector2 class for position for other classes. Can be used without the drawing classes.
  
<br>

- ```ts
   var name = new Size(width: number, height: number);
  ```
  - Size class for sizing numbers for other classes. Can be used without the drawing classes.
  
<br> 

- ```ts
   var name = new Sprite(imageSrc: string, position: Vector2, ScreenSize: Size);
  ```
  - Sprite class draws a sprite/image into canvas, you can change its source location of image, position and current screen size( for it to work ). You must first initialize sprite, before you can draw it.
  
<br>

### License:

**This project is licensed with the MIT LICENSE. Please follow additional info about it, at LICENSE file.**

