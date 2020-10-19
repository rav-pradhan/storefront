import HelloWorld from "./HelloWorld";

describe("HelloWorld greeting", function () {
  it("returns the relevant salutation", () => {
    expect(HelloWorld.Greet("Tidings")).toBe("Tidings!");
  });
});
