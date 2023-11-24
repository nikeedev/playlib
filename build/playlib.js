/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/core/Data.js":
/*!**************************!*\
  !*** ./bin/core/Data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Data: () => (/* binding */ Data)\n/* harmony export */ });\nlet Data = {\n    loadedFiles: [],\n    getFromCookie(name) {\n        return localStorage.getItem(name);\n    },\n    saveToCookie(data, name) {\n        localStorage.setItem(name, data);\n    },\n    clearCookies() {\n        console.log(\"↓ %cCookies cleared %c ↓ %cRemember, only localStorage got cleared.\", \"color: blue; font-size: 20px;\", \"color: white;\", \"font-size: 15px; color: red;\");\n        localStorage.clear();\n    },\n    async loadJSONFile(filePath) {\n        const Response = await fetch(filePath);\n        const Response_1 = await Response.json();\n        console.log(Response_1);\n        return Response_1;\n    }\n};\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/Data.js?");

/***/ }),

/***/ "./bin/core/Game.js":
/*!**************************!*\
  !*** ./bin/core/Game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _math_Funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Funcs.js */ \"./bin/math/Funcs.js\");\n\n/**\n * @description Creates new game\n * @since 0.4.0\n */\nclass Game {\n    game_name;\n    game_version;\n    parent_element;\n    style;\n    width;\n    height;\n    canvas;\n    /*\n    private ClearScreen: boolean | undefined;\n    */\n    oldTimeStamp;\n    fps;\n    fps_on = false;\n    /*\n    private game_type: string;\n    */\n    scenes;\n    current_scene = 0;\n    constructor(config, scenes, current_scene = 1) {\n        this.game_name = config.game_name != null ? config.game_name : null;\n        this.game_version = config.game_version != null ? config.game_version : null;\n        this.style = config.style;\n        this.width = window.innerWidth - 30;\n        this.height = window.innerHeight - 30;\n        document.title = this.game_name != null ? this.game_name : document.title;\n        document.title += this.game_version != null ? (\" - v\" + this.game_version) : \"\";\n        this.scenes = scenes;\n        this.current_scene = current_scene - 1;\n        /*\n        if (config.game_type == \"canvas\" || config.game_type == \"dom\") {\n            this.game_type = config.game_type;\n        } else {\n            Logging.error(`${this.game_type} is not a valid game_type`)\n            Logging.warn(\"Setting game_type to \\\"canvas\\\"\");\n            this.game_type = \"canvas\"\n        }\n        */\n        if (typeof this.canvas !== undefined) {\n            this.parent_element = config.canvas.parentElement;\n            this.canvas = config.canvas;\n            this.canvas.style = \"background-color: black;\" + this.style;\n            this.canvas.width = this.width;\n            this.canvas.height = this.height;\n        }\n        else {\n            this.parent_element = config.parent_element;\n            this.canvas = document.createElement('canvas');\n            this.canvas.style = (\"background-color: black;\" + this.style);\n            this.canvas.width = this.width;\n            this.canvas.height = this.height;\n            document.querySelector(this.parent_element).append(this.canvas);\n        }\n        /*\n\n        let powered_by_playlib = document.createElement(\"span\")\n        powered_by_playlib.style.fontFamily = 'arial';\n        powered_by_playlib.style.fontSize = \"16px\";\n        powered_by_playlib.innerText = \"PlayLib\";\n\n        let powered_holder = document.createElement(\"p\");\n        powered_holder.style.fontFamily = 'arial';\n        powered_holder.style.fontSize = \"13px\";\n        powered_holder.innerHTML = \"Powered by \";\n        powered_holder.appendChild(powered_by_playlib);\n        document.body.appendChild(powered_holder);\n        \n        */\n    }\n    run() {\n        let context = this.canvas.getContext('2d');\n        /*\n        console.log(this.scenes);\n        console.log(all_scenes);\n        */\n        if (this.scenes[this.current_scene] === undefined) {\n            console.log(\"%cScene was not found or was not valid; Resetting to last available scene\", \"font-size: 20px; color: rgb(220, 10, 10)\");\n            this.current_scene--;\n        }\n        let currentScene = this.scenes[this.current_scene];\n        console.log(currentScene);\n        console.log(currentScene.create);\n        currentScene.create(context);\n        // console.log(currentScene.ClearScreen)\n        console.log(currentScene.update);\n        let FPSDeltaTime;\n        let MoveDeltaTime;\n        const gameLoop = (timeStamp) => {\n            window.addEventListener(\"resize\", () => {\n                this.width = window.innerWidth - 21.5;\n                this.height = window.innerHeight - 21.5;\n                this.canvas.width = this.width;\n                this.canvas.height = this.height;\n            });\n            // Calculate the number of seconds passed since the last frame\n            FPSDeltaTime = 1000 / (timeStamp - this.oldTimeStamp);\n            MoveDeltaTime = (timeStamp - this.oldTimeStamp) / 1000;\n            this.oldTimeStamp = timeStamp;\n            // Calculate fps\n            this.fps = _math_Funcs_js__WEBPACK_IMPORTED_MODULE_0__.math.floor(FPSDeltaTime);\n            if (currentScene.ClearScreen) {\n                console.log(\"Cleared the screen\");\n                this.clear();\n            }\n            currentScene.update(context, MoveDeltaTime);\n            // Draw number to the screen\n            if (this.fps_on) {\n                context.fillStyle = 'white';\n                context.fillRect(0, 0, 105, 42.5);\n                context.font = '18px Arial';\n                context.fillStyle = 'black';\n                context.fillText(\"FPS: \" + this.fps, 10, 30);\n            }\n            // The loop function has reached it's end. Keep requesting new frames\n            window.requestAnimationFrame(gameLoop);\n        };\n        window.requestAnimationFrame(gameLoop);\n    }\n    clear() {\n        let context = this.canvas.getContext('2d');\n        context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    showFPS(is_on) {\n        this.fps_on = is_on;\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/Game.js?");

/***/ }),

/***/ "./bin/core/Info.js":
/*!**************************!*\
  !*** ./bin/core/Info.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = \"0.6.10\";\nfunction about() {\n    console.log(\"%c/@-----------------------------------@\\\\\" + \"\\n\" +\n        \"|            Playlib v\" + version + \"           |\\n\" +\n        \"\\\\@-----------------------------------@/\\n\\n\", \"font-size: 17px; background-color: #6495ed;\");\n}\n\n\n//# sourceURL=webpack://playlib/./bin/core/Info.js?");

/***/ }),

/***/ "./bin/core/event/Input.js":
/*!*********************************!*\
  !*** ./bin/core/event/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: () => (/* binding */ Input)\n/* harmony export */ });\n/* harmony import */ var _math_Vector2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math/Vector2.js */ \"./bin/math/Vector2.js\");\n\nclass Input {\n    static keysPressed = {};\n    static mouseBtnsPressed = {};\n    static mousePos = new _math_Vector2_js__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    constructor() {\n        window.addEventListener(\"keydown\", e => {\n            Input.keysPressed[e.keyCode] = true;\n        });\n        window.addEventListener(\"keyup\", e => {\n            Input.keysPressed[e.keyCode] = false;\n        });\n        window.addEventListener(\"pointermove\", e => {\n            Input.mouseBtnPressed[e.button] = true;\n            Input.mousePos.x = e.x;\n            Input.mousePos.y = e.y;\n        });\n    }\n    static KeyPressed(key) {\n        return !!this.keysPressed[key];\n    }\n    static mouseBtnPressed(btn) {\n        return !!this.mouseBtnsPressed[btn];\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/event/Input.js?");

/***/ }),

/***/ "./bin/core/event/Keys.js":
/*!********************************!*\
  !*** ./bin/core/event/Keys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Keys: () => (/* binding */ Keys)\n/* harmony export */ });\nvar Keys;\n(function (Keys) {\n    Keys[Keys[\"Cancel\"] = 3] = \"Cancel\";\n    Keys[Keys[\"Backspace\"] = 8] = \"Backspace\";\n    Keys[Keys[\"Tab\"] = 9] = \"Tab\";\n    Keys[Keys[\"Clear\"] = 12] = \"Clear\";\n    Keys[Keys[\"Enter\"] = 13] = \"Enter\";\n    Keys[Keys[\"Shift\"] = 16] = \"Shift\";\n    Keys[Keys[\"ControlLeft\"] = 17] = \"ControlLeft\";\n    Keys[Keys[\"AltLeft\"] = 18] = \"AltLeft\";\n    Keys[Keys[\"Pause\"] = 19] = \"Pause\";\n    Keys[Keys[\"CapsLook\"] = 20] = \"CapsLook\";\n    Keys[Keys[\"Escape\"] = 27] = \"Escape\";\n    Keys[Keys[\"Space\"] = 32] = \"Space\";\n    Keys[Keys[\"PageUp\"] = 33] = \"PageUp\";\n    Keys[Keys[\"PageDown\"] = 34] = \"PageDown\";\n    Keys[Keys[\"End\"] = 35] = \"End\";\n    Keys[Keys[\"Home\"] = 36] = \"Home\";\n    Keys[Keys[\"Left\"] = 37] = \"Left\";\n    Keys[Keys[\"Up\"] = 38] = \"Up\";\n    Keys[Keys[\"Right\"] = 39] = \"Right\";\n    Keys[Keys[\"Down\"] = 40] = \"Down\";\n    Keys[Keys[\"Insert\"] = 45] = \"Insert\";\n    Keys[Keys[\"Delete\"] = 46] = \"Delete\";\n    Keys[Keys[\"Num0\"] = 48] = \"Num0\";\n    Keys[Keys[\"Num1\"] = 49] = \"Num1\";\n    Keys[Keys[\"Num2\"] = 50] = \"Num2\";\n    Keys[Keys[\"Num3\"] = 51] = \"Num3\";\n    Keys[Keys[\"Num4\"] = 52] = \"Num4\";\n    Keys[Keys[\"Num5\"] = 53] = \"Num5\";\n    Keys[Keys[\"Num6\"] = 54] = \"Num6\";\n    Keys[Keys[\"Num7\"] = 55] = \"Num7\";\n    Keys[Keys[\"Num8\"] = 56] = \"Num8\";\n    Keys[Keys[\"Num9\"] = 57] = \"Num9\";\n    Keys[Keys[\"Period\"] = 58] = \"Period\";\n    Keys[Keys[\"Semicolon\"] = 59] = \"Semicolon\";\n    Keys[Keys[\"Backquote\"] = 60] = \"Backquote\";\n    Keys[Keys[\"Equal\"] = 61] = \"Equal\";\n    Keys[Keys[\"IsSameAs\"] = 61] = \"IsSameAs\";\n    Keys[Keys[\"Equals\"] = 61] = \"Equals\";\n    Keys[Keys[\"Minus\"] = 63] = \"Minus\";\n    Keys[Keys[\"\\u00DF\"] = 63] = \"\\u00DF\";\n    Keys[Keys[\"A\"] = 65] = \"A\";\n    Keys[Keys[\"B\"] = 66] = \"B\";\n    Keys[Keys[\"C\"] = 67] = \"C\";\n    Keys[Keys[\"D\"] = 68] = \"D\";\n    Keys[Keys[\"E\"] = 69] = \"E\";\n    Keys[Keys[\"F\"] = 70] = \"F\";\n    Keys[Keys[\"G\"] = 71] = \"G\";\n    Keys[Keys[\"H\"] = 72] = \"H\";\n    Keys[Keys[\"I\"] = 73] = \"I\";\n    Keys[Keys[\"J\"] = 74] = \"J\";\n    Keys[Keys[\"K\"] = 75] = \"K\";\n    Keys[Keys[\"L\"] = 76] = \"L\";\n    Keys[Keys[\"M\"] = 77] = \"M\";\n    Keys[Keys[\"N\"] = 78] = \"N\";\n    Keys[Keys[\"O\"] = 79] = \"O\";\n    Keys[Keys[\"P\"] = 80] = \"P\";\n    Keys[Keys[\"Q\"] = 81] = \"Q\";\n    Keys[Keys[\"R\"] = 82] = \"R\";\n    Keys[Keys[\"S\"] = 83] = \"S\";\n    Keys[Keys[\"T\"] = 84] = \"T\";\n    Keys[Keys[\"U\"] = 85] = \"U\";\n    Keys[Keys[\"V\"] = 86] = \"V\";\n    Keys[Keys[\"W\"] = 87] = \"W\";\n    Keys[Keys[\"X\"] = 88] = \"X\";\n    Keys[Keys[\"Y\"] = 89] = \"Y\";\n    Keys[Keys[\"Z\"] = 90] = \"Z\";\n    Keys[Keys[\"MetaLeft\"] = 91] = \"MetaLeft\";\n    Keys[Keys[\"Meta\"] = 91] = \"Meta\";\n    Keys[Keys[\"MetaRight\"] = 92] = \"MetaRight\";\n    Keys[Keys[\"Numpad0\"] = 96] = \"Numpad0\";\n    Keys[Keys[\"Numpad1\"] = 97] = \"Numpad1\";\n    Keys[Keys[\"Numpad2\"] = 98] = \"Numpad2\";\n    Keys[Keys[\"Numpad3\"] = 99] = \"Numpad3\";\n    Keys[Keys[\"Numpad4\"] = 100] = \"Numpad4\";\n    Keys[Keys[\"Numpad5\"] = 101] = \"Numpad5\";\n    Keys[Keys[\"Numpad6\"] = 102] = \"Numpad6\";\n    Keys[Keys[\"Numpad7\"] = 103] = \"Numpad7\";\n    Keys[Keys[\"Numpad8\"] = 104] = \"Numpad8\";\n    Keys[Keys[\"Numpad9\"] = 105] = \"Numpad9\";\n    Keys[Keys[\"NumpadMultiply\"] = 106] = \"NumpadMultiply\";\n    Keys[Keys[\"NumpadAdd\"] = 107] = \"NumpadAdd\";\n    Keys[Keys[\"NumpadComma\"] = 108] = \"NumpadComma\";\n    Keys[Keys[\"NumpadSubtract\"] = 109] = \"NumpadSubtract\";\n    Keys[Keys[\"NumpadDecimal\"] = 110] = \"NumpadDecimal\";\n    Keys[Keys[\"NumpadDivide\"] = 111] = \"NumpadDivide\";\n    Keys[Keys[\"F1\"] = 112] = \"F1\";\n    Keys[Keys[\"F2\"] = 113] = \"F2\";\n    Keys[Keys[\"F3\"] = 114] = \"F3\";\n    Keys[Keys[\"F4\"] = 115] = \"F4\";\n    Keys[Keys[\"F5\"] = 116] = \"F5\";\n    Keys[Keys[\"F6\"] = 117] = \"F6\";\n    Keys[Keys[\"F7\"] = 118] = \"F7\";\n    Keys[Keys[\"F8\"] = 119] = \"F8\";\n    Keys[Keys[\"F9\"] = 120] = \"F9\";\n    Keys[Keys[\"F10\"] = 121] = \"F10\";\n    Keys[Keys[\"F11\"] = 122] = \"F11\";\n    Keys[Keys[\"F12\"] = 123] = \"F12\";\n    Keys[Keys[\"F13\"] = 124] = \"F13\";\n    Keys[Keys[\"F14\"] = 125] = \"F14\";\n    Keys[Keys[\"F15\"] = 126] = \"F15\";\n    Keys[Keys[\"F16\"] = 127] = \"F16\";\n    Keys[Keys[\"F17\"] = 128] = \"F17\";\n    Keys[Keys[\"F18\"] = 129] = \"F18\";\n    Keys[Keys[\"F19\"] = 130] = \"F19\";\n    Keys[Keys[\"F20\"] = 131] = \"F20\";\n    Keys[Keys[\"F21\"] = 132] = \"F21\";\n    Keys[Keys[\"F22\"] = 133] = \"F22\";\n    Keys[Keys[\"F23\"] = 134] = \"F23\";\n    Keys[Keys[\"F24\"] = 135] = \"F24\";\n    Keys[Keys[\"F25\"] = 136] = \"F25\";\n    Keys[Keys[\"F26\"] = 137] = \"F26\";\n    Keys[Keys[\"F27\"] = 138] = \"F27\";\n    Keys[Keys[\"F28\"] = 139] = \"F28\";\n    Keys[Keys[\"F29\"] = 140] = \"F29\";\n    Keys[Keys[\"F30\"] = 141] = \"F30\";\n    Keys[Keys[\"F31\"] = 142] = \"F31\";\n    Keys[Keys[\"F32\"] = 143] = \"F32\";\n    Keys[Keys[\"NumLock\"] = 144] = \"NumLock\";\n    Keys[Keys[\"ScrollLock\"] = 145] = \"ScrollLock\";\n    Keys[Keys[\"BracketLeft\"] = 160] = \"BracketLeft\";\n    Keys[Keys[\"BracketRight\"] = 161] = \"BracketRight\";\n    Keys[Keys[\"BackSlash\"] = 163] = \"BackSlash\";\n})(Keys || (Keys = {}));\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/event/Keys.js?");

/***/ }),

/***/ "./bin/core/index.js":
/*!***************************!*\
  !*** ./bin/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Data: () => (/* reexport safe */ _Data_js__WEBPACK_IMPORTED_MODULE_6__.Data),\n/* harmony export */   Game: () => (/* reexport safe */ _Game_js__WEBPACK_IMPORTED_MODULE_0__.Game),\n/* harmony export */   Input: () => (/* reexport safe */ _event_Input_js__WEBPACK_IMPORTED_MODULE_4__.Input),\n/* harmony export */   Keys: () => (/* reexport safe */ _event_Keys_js__WEBPACK_IMPORTED_MODULE_5__.Keys),\n/* harmony export */   Scene: () => (/* reexport safe */ _scene_Scene_js__WEBPACK_IMPORTED_MODULE_2__.Scene),\n/* harmony export */   Sound: () => (/* reexport safe */ _sound_Sound_js__WEBPACK_IMPORTED_MODULE_3__.Sound),\n/* harmony export */   about: () => (/* reexport safe */ _Info_js__WEBPACK_IMPORTED_MODULE_1__.about),\n/* harmony export */   version: () => (/* reexport safe */ _Info_js__WEBPACK_IMPORTED_MODULE_1__.version)\n/* harmony export */ });\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./bin/core/Game.js\");\n/* harmony import */ var _Info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.js */ \"./bin/core/Info.js\");\n/* harmony import */ var _scene_Scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/Scene.js */ \"./bin/core/scene/Scene.js\");\n/* harmony import */ var _sound_Sound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound/Sound.js */ \"./bin/core/sound/Sound.js\");\n/* harmony import */ var _event_Input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/Input.js */ \"./bin/core/event/Input.js\");\n/* harmony import */ var _event_Keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/Keys.js */ \"./bin/core/event/Keys.js\");\n/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Data.js */ \"./bin/core/Data.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/index.js?");

/***/ }),

/***/ "./bin/core/scene/Scene.js":
/*!*********************************!*\
  !*** ./bin/core/scene/Scene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Scene: () => (/* binding */ Scene)\n/* harmony export */ });\n/**\n * @description Creating a scene that can later be added to a game.\n *\n * @since 0.6.0\n*/\nclass Scene {\n    ClearScreen = false;\n    create(ctx) {\n    }\n    update(ctx, deltaTime) {\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/scene/Scene.js?");

/***/ }),

/***/ "./bin/core/sound/Sound.js":
/*!*********************************!*\
  !*** ./bin/core/sound/Sound.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sound: () => (/* binding */ Sound)\n/* harmony export */ });\nclass Sound {\n    audio_file;\n    sond;\n    loop = false;\n    constructor(audio_file) {\n        this.audio_file = audio_file;\n        document.cookie = \"promo_shown=1; Max-Age=2600000; Secure\";\n    }\n    async init() {\n        var snd = new Audio();\n        return new Promise((resolve, reject) => {\n            snd.preload = \"auto\"; // intend to play through\n            snd.autoplay = true; // autoplay when loaded\n            snd.onerror = reject; // on error, reject\n            snd.onended = resolve; // when done, resolve\n            snd.loop = this.loop;\n            snd.src = this.audio_file; // just for example\n            this.sond = snd;\n        });\n    }\n    play() {\n        this.sond.loop = this.loop;\n        window.addEventListener('click', () => {\n            this.sond.play();\n        });\n    }\n    pause() {\n        this.sond.loop = this.loop;\n        this.sond.pause();\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/core/sound/Sound.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Data: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_4__.Data),\n/* harmony export */   Game: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_4__.Game),\n/* harmony export */   GameObject: () => (/* reexport safe */ _objects_index_js__WEBPACK_IMPORTED_MODULE_3__.GameObject),\n/* harmony export */   Input: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_4__.Input),\n/* harmony export */   Keys: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_4__.Keys),\n/* harmony export */   Rect: () => (/* reexport safe */ _objects_index_js__WEBPACK_IMPORTED_MODULE_3__.Rect),\n/* harmony export */   Scene: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_4__.Scene),\n/* harmony export */   Sound: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_4__.Sound),\n/* harmony export */   Sprite: () => (/* reexport safe */ _objects_index_js__WEBPACK_IMPORTED_MODULE_3__.Sprite),\n/* harmony export */   Text: () => (/* reexport safe */ _objects_index_js__WEBPACK_IMPORTED_MODULE_3__.Text),\n/* harmony export */   Vector2: () => (/* reexport safe */ _math_index_js__WEBPACK_IMPORTED_MODULE_2__.Vector2),\n/* harmony export */   about: () => (/* reexport safe */ _core_Info_js__WEBPACK_IMPORTED_MODULE_1__.about),\n/* harmony export */   math: () => (/* reexport safe */ _math_index_js__WEBPACK_IMPORTED_MODULE_2__.math),\n/* harmony export */   version: () => (/* reexport safe */ _core_Info_js__WEBPACK_IMPORTED_MODULE_1__.version)\n/* harmony export */ });\n/* harmony import */ var _core_event_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/event/Input.js */ \"./bin/core/event/Input.js\");\n/* harmony import */ var _core_Info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Info.js */ \"./bin/core/Info.js\");\n/* harmony import */ var _math_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/index.js */ \"./bin/math/index.js\");\n/* harmony import */ var _objects_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/index.js */ \"./bin/objects/index.js\");\n/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/index.js */ \"./bin/core/index.js\");\n\n\n\n\n\n\nnew _core_event_Input_js__WEBPACK_IMPORTED_MODULE_0__.Input();\n(0,_core_Info_js__WEBPACK_IMPORTED_MODULE_1__.about)();\n\n\n//# sourceURL=webpack://playlib/./bin/index.js?");

/***/ }),

/***/ "./bin/math/Funcs.js":
/*!***************************!*\
  !*** ./bin/math/Funcs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   math: () => (/* binding */ math)\n/* harmony export */ });\nlet math = {\n    floor(_num, amount = 0) {\n        let a = amount;\n        let num = String(_num);\n        if (0 <= a) {\n            return (Number(num.slice(0, num.indexOf(\".\") + a + 1)));\n        }\n        else {\n            let b = \"\";\n            for (let i = 0; i < 0 - a; i++) {\n                b += \"0\";\n            }\n            return (Number(num.slice(0, num.indexOf(\".\") + a) + b));\n        }\n    }\n};\n\n\n\n//# sourceURL=webpack://playlib/./bin/math/Funcs.js?");

/***/ }),

/***/ "./bin/math/Vector2.js":
/*!*****************************!*\
  !*** ./bin/math/Vector2.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vector2: () => (/* binding */ Vector2)\n/* harmony export */ });\n/**\n *\n * @description This is datatype for storing **x** and **y** axis in a variable/const/let\n *\n*/\nclass Vector2 {\n    x;\n    y;\n    constructor(x = 0, y = 0) {\n        this.x = x;\n        this.y = y;\n    }\n    normalize() {\n        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));\n        this.x /= magnitude;\n        this.y /= magnitude;\n    }\n    magnitude() {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n    lerp(v1, v2, t) {\n        const x = v1.x * (1 - t) + v2.x * t;\n        const y = v1.y * (1 - t) + v2.y * t;\n        return new Vector2(x, y);\n    }\n    ;\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/math/Vector2.js?");

/***/ }),

/***/ "./bin/math/index.js":
/*!***************************!*\
  !*** ./bin/math/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vector2: () => (/* reexport safe */ _Vector2_js__WEBPACK_IMPORTED_MODULE_0__.Vector2),\n/* harmony export */   math: () => (/* reexport safe */ _Funcs_js__WEBPACK_IMPORTED_MODULE_1__.math)\n/* harmony export */ });\n/* harmony import */ var _Vector2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2.js */ \"./bin/math/Vector2.js\");\n/* harmony import */ var _Funcs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Funcs.js */ \"./bin/math/Funcs.js\");\n\n\n\n\n//# sourceURL=webpack://playlib/./bin/math/index.js?");

/***/ }),

/***/ "./bin/objects/GameObject.js":
/*!***********************************!*\
  !*** ./bin/objects/GameObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameObject: () => (/* binding */ GameObject)\n/* harmony export */ });\nclass GameObject {\n    position;\n    screenSize;\n    constructor(position, screenSize) {\n        this.position = position;\n        this.screenSize = screenSize;\n    }\n    draw(ctx) {\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/objects/GameObject.js?");

/***/ }),

/***/ "./bin/objects/Rect.js":
/*!*****************************!*\
  !*** ./bin/objects/Rect.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Rect: () => (/* binding */ Rect)\n/* harmony export */ });\n/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ \"./bin/objects/GameObject.js\");\n\nclass Rect extends _GameObject_js__WEBPACK_IMPORTED_MODULE_0__.GameObject {\n    size;\n    color = \"#ffffff\";\n    constructor(position, size, screenSize, color) {\n        super(position, screenSize);\n        this.size = size;\n    }\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/objects/Rect.js?");

/***/ }),

/***/ "./bin/objects/Sprite.js":
/*!*******************************!*\
  !*** ./bin/objects/Sprite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sprite: () => (/* binding */ Sprite)\n/* harmony export */ });\n/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ \"./bin/objects/GameObject.js\");\n\nfunction loadImage(url) {\n    return new Promise((resolve) => {\n        const img = new Image();\n        img.onload = () => resolve(img);\n        img.src = url;\n    });\n}\nclass Sprite extends _GameObject_js__WEBPACK_IMPORTED_MODULE_0__.GameObject {\n    imageSrc;\n    image;\n    style = \"\";\n    constructor(imageSrc, position, screenSize) {\n        super(position, screenSize);\n        this.imageSrc = imageSrc;\n    }\n    async init() {\n        // Load the image\n        const img = await loadImage(this.imageSrc);\n        img.style.imageRendering += \"pixelated\";\n        this.image = img;\n        console.log(this.image);\n    }\n    async draw(ctx, imageSize, clipPos, clipSize) {\n        // console.log(this.image)\n        if (clipPos === undefined || clipSize === undefined) {\n            ctx.drawImage(this.image, this.position.x, this.position.y, imageSize.x, imageSize.y);\n        }\n        else {\n            ctx.drawImage(this.image, clipPos.x, clipPos.y, clipSize.x, clipSize.y, this.position.x, this.position.y, imageSize.x, imageSize.y);\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/objects/Sprite.js?");

/***/ }),

/***/ "./bin/objects/Text.js":
/*!*****************************!*\
  !*** ./bin/objects/Text.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Text: () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ \"./bin/objects/GameObject.js\");\n\nclass Text extends _GameObject_js__WEBPACK_IMPORTED_MODULE_0__.GameObject {\n    text;\n    color = \"#ffffff\";\n    font = \"20px Arial\";\n    constructor(text, position, screenSize) {\n        super(position, screenSize);\n        this.text = text;\n    }\n    draw(ctx) {\n        ctx.font = this.font;\n        ctx.fillStyle = this.color;\n        ctx.fillText(this.text, this.position.x, this.position.y);\n    }\n}\n\n\n\n//# sourceURL=webpack://playlib/./bin/objects/Text.js?");

/***/ }),

/***/ "./bin/objects/index.js":
/*!******************************!*\
  !*** ./bin/objects/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameObject: () => (/* reexport safe */ _GameObject_js__WEBPACK_IMPORTED_MODULE_3__.GameObject),\n/* harmony export */   Rect: () => (/* reexport safe */ _Rect_js__WEBPACK_IMPORTED_MODULE_0__.Rect),\n/* harmony export */   Sprite: () => (/* reexport safe */ _Sprite_js__WEBPACK_IMPORTED_MODULE_2__.Sprite),\n/* harmony export */   Text: () => (/* reexport safe */ _Text_js__WEBPACK_IMPORTED_MODULE_1__.Text)\n/* harmony export */ });\n/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ \"./bin/objects/Rect.js\");\n/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.js */ \"./bin/objects/Text.js\");\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite.js */ \"./bin/objects/Sprite.js\");\n/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameObject.js */ \"./bin/objects/GameObject.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://playlib/./bin/objects/index.js?");

/***/ }),

/***/ "./bin/playlib.js":
/*!************************!*\
  !*** ./bin/playlib.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./bin/index.js\");\n\n/**\n * Playlib\n */\nconst Playlib = {\n    about: _index_js__WEBPACK_IMPORTED_MODULE_0__.about,\n    version: _index_js__WEBPACK_IMPORTED_MODULE_0__.version,\n    Vector2: _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector2,\n    Game: _index_js__WEBPACK_IMPORTED_MODULE_0__.Game,\n    Input: _index_js__WEBPACK_IMPORTED_MODULE_0__.Input,\n    Keys: _index_js__WEBPACK_IMPORTED_MODULE_0__.Keys,\n    Scene: _index_js__WEBPACK_IMPORTED_MODULE_0__.Scene,\n    Sound: _index_js__WEBPACK_IMPORTED_MODULE_0__.Sound,\n    Sprite: _index_js__WEBPACK_IMPORTED_MODULE_0__.Sprite,\n    Rect: _index_js__WEBPACK_IMPORTED_MODULE_0__.Rect,\n    Text: _index_js__WEBPACK_IMPORTED_MODULE_0__.Text,\n    GameObject: _index_js__WEBPACK_IMPORTED_MODULE_0__.GameObject,\n    Data: _index_js__WEBPACK_IMPORTED_MODULE_0__.Data,\n    Math: _index_js__WEBPACK_IMPORTED_MODULE_0__.math,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ Playlib });\n\n\n//# sourceURL=webpack://playlib/./bin/playlib.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/playlib.js");
/******/ 	
/******/ })()
;