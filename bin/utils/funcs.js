function run(code) {
    eval(code);
}
class Color {
    r;
    g;
    b;
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
export { run };
