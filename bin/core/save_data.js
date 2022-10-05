var Data;
(function (Data) {
    function get(name) {
        return localStorage.getItem(name);
    }
    function save(data, name) {
        localStorage.setItem(name, data);
    }
    function clear() {
        localStorage.clear();
    }
})(Data || (Data = {}));
export { Data };
