let Data = {
    loadedFiles: [],
    getFromCookie(name) {
        return localStorage.getItem(name);
    },
    saveToCookie(data, name) {
        localStorage.setItem(name, data);
    },
    clearCookies() {
        console.log("↓ %cCookies cleared %c ↓ %cRemember, not all cookies had been cleared, only localStorage ones.", "color: blue; font-size: 20px;", "color: white;", "font-size: 15px; color: red;");
        localStorage.clear();
    },
    async loadJSONFile(filePath) {
        const Response = await fetch(filePath);
        const Response_1 = await Response.json();
        console.log(Response_1);
        return Response_1;
    }
};
export { Data };
