import { Vector2, Size, Rect, Text, Sprite, Screen, Object } from '../../dist/GameEngine.js';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

var object = new Object("../../moving.gameengine-obj");

object.load()



