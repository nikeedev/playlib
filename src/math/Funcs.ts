
let math = {
    floor(_num: number, amount: number = 0) {
        let a = amount
        let num = String(_num)
        if (0 <= a) {
            return (Number(num.slice(0, num.indexOf(".") + a + 1)))
        }
        else {
            let b = ""
            for (let i = 0; i < 0 - a; i++) {
                b += "0"
            }
            return (Number(num.slice(0, num.indexOf(".") + a) + b))
        }
    }
}

export { math }