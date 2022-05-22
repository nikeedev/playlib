
const Logging = {
    style: "",
    log: function(text: string) {
        console.log("%c"+text, this.style)
    },
    warn: function(text: string) {
        console.warn("%c"+text, this.style)
    },
    error: function(text: string) {
        console.error("%c"+text, this.style)
    },
}



export { Logging };
