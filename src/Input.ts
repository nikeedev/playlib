import { Keys } from './Keys.js'

class Input {
    GetKeyDown(key: any) {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == key) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}

export { Input }
