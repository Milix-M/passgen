const passwordGenerator = (charcount, mode) => {
    if (mode === "charonly") {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let random_str = ""
        for (let i = 0; i < charcount; i++) {
            random_str += chars.charAt(Math.floor(Math.random() * chars.length))
        }

        return random_str
    } else if (mode === "symbolsInclude") {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_/*+.,!#$%&()~|"

        let random_str = ""
        for (let i = 0; i < charcount; i++) {
            random_str += chars.charAt(Math.floor(Math.random() * chars.length))
        }

        return random_str
    }
}

export default passwordGenerator
