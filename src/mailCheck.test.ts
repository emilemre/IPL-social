import { validMailName } from "./mailCheck";


//smallest test possible
describe("mailCheck", () => {
  it("should return false", () => {
    const mail: boolean = validMailName("test");
    expect(mail).toBe(false);
  });
});

describe("mailChechFor@", ()=> {
    it("should return true if '@' is present in the string", ()=>{
        const mail : boolean = validMailName("@test");
        expect(mail).toBe(true);
    })
})