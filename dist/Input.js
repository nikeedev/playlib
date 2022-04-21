class Input {
    GetKeyDown(key) {
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
export { Input };
