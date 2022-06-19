declare class Event {
    static keysPressed: {};
    static mouseBtnsPressed: {};
    constructor();
    static KeyPressed(key: any): boolean;
    static mouseBtnPressed(btn: any): boolean;
}
export { Event };
