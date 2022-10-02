const Logging = {
    style: "",
    log: function (text) {
        console.log("%c" + text, this.style);
    },
    warn: function (text) {
        console.warn("%c" + text, this.style);
    },
    error: function (text) {
        console.error("%c" + text, this.style);
    },
};
export { Logging };
