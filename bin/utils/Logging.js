const Logging = {
    style: "",
    log: function (text) {
        console.log("%c" + text, this.style);
    },
    warn: function (text) {
        console.warn("%cWARNING: " + text, "color: yellow;" + this.style);
    },
    error: function (text) {
        console.error("%c" + text, this.style);
    },
};
export { Logging };
