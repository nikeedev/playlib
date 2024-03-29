
let Data =
{
    loadedFiles: [],

    getFromCookie(name: string)
    {
        return localStorage.getItem(name);
    },

    saveToCookie(data: any, name: string)
    {
        localStorage.setItem(name, data);
    },

    clearCookies()
    {
        console.log("↓ %cCookies cleared %c ↓ %cRemember, only localStorage got cleared.", "color: blue; font-size: 20px;", "color: white;", "font-size: 15px; color: red;", );
        localStorage.clear();
    },

    async loadJSONFile(filePath: string)
    {
        
        const Response = await fetch(filePath);
        const Response_1 = await Response.json();
        console.log(Response_1);
        
        return Response_1;
        
    }
}

export { Data }
