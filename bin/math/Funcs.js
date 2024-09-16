var math = {
    floor: function (_num, amount) {
        if (amount === void 0) { amount = 0; }
        var a = amount;
        var num = String(_num);
        if (0 <= a) {
            return (Number(num.slice(0, num.indexOf(".") + a + 1)));
        }
        else {
            var b = "";
            for (var i = 0; i < 0 - a; i++) {
                b += "0";
            }
            return (Number(num.slice(0, num.indexOf(".") + a) + b));
        }
    }
};
export { math };
//# sourceMappingURL=Funcs.js.map