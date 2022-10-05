
namespace Data
{
    function get(name: string)
    {
        return localStorage.getItem(name);
    }

    function save(data: any, name: string)
    {
        localStorage.setItem(name, data);
    }

    function clear()
    {
        localStorage.clear();
    }
}

export { Data }
