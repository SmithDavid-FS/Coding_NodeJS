const {uppercase, lowercase} = require("./string")

describe("testing the string module", ()=>{

    test("should uppercase a string input", ()=>{
        // const result = toUppercase("bob");
        // expect(result).toBe("BOB");
        expect(uppercase("bob")).toBe("BOB");
    });

    test("should lowercase a string input", () => {
        expect(lowercase("FULL Sail")).toBe("full sail");
    });
});