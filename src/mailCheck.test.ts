import { validMailName } from "./mailCheck";


//smallest test possible
describe("mailCheck", () => {
  it("should return false", () => {
    const mail: boolean = validMailName("test");
    expect(mail).toBe(false);
  });
});