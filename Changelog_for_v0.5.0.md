# Changes in PlayLib v0.5.0

First of all, thanks for choosing this library.

For people who have used the "engine"(now will be called library) before, GameEngine.js will now be officially called: <span style="font-size: 20px; background-image: linear-gradient(to right, #61BB46, #FDB827, #E03A3E, #963D97, #009DDC);-webkit-background-clip: text; -webkit-text-fill-color: transparent">PlayLib</span>!

Changes:

- Changed the name of the library (you know it guys already :)
- Added new keys to `Keys` variable, like Alt key, Meta key, and all Fn keys.
- Fully updated `Game` class
    - Added `showFps(fps_on: boolean)` function to turn on or off fps counter.
    - Added `deltaTime` variable for people who need it for their *smooth* game.
    - Updated `update(function)` function to update per animation frame, and so on.
    - Also add so that when creating new Game, it will add a small text banner below which says "Powered by PlayLib" :)
- Updated Sound class, which now takes in sound src in constructor, and not in `init()` function of it.
- Updated and added GameObject class for creating object classes for library. Maybe can add access to it for everyone, but maybe later.
- Added mouse button detection in `Event`.
- Deleted away `setScreenMode(mode: string)` because it doesn't fit with already existing way to get window's width and height.
- Updated all examples (including the testing one) to this brand new update.


And that's all updates that i did reach for this update, next idea is to add Scenes. :)

Have nice coding with PlayLib.