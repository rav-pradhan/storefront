import LocalStore from "./LocalStore";

let localStore: LocalStore

beforeEach(() => {
  localStore = new LocalStore();
})

describe("LocalStore", () => {
  test("the LocalStore can get an typed value by key", () => {
    localStore.set("greeting", "hello");
    localStore.set("age", 25);
    localStore.set("isSubscribed", false);

    const gotString = localStore.get("greeting");
    expect(gotString).toEqual("hello");

    const gotNumber = localStore.get("age");
    expect(gotNumber).toEqual(25);

    const gotBoolean = localStore.get("isSubscribed");
    expect(gotBoolean).toBeFalsy();
  });
  test("a key/value pair can be removed from the LocalStore", () => {
    localStore.set("isCold", true);
    localStore.remove("isCold");
    expect(localStore.get("isCold")).toEqual(null);
  });
  test("a LocalStore can be cleared entirely", () => {
    localStore.set("age", 25);
    localStore.set("name", "Tony");
    localStore.clear();
    expect(localStore.get("age")).toEqual(null);
    expect(localStore.get("name")).toEqual(null);
  });
  test("a LocalStore can get all key value pairs and return it as an object", () => {
    const address = {
      street: "ABC St.",
      county: "County",
      country: "Country",
      postcode: "1234 ABC",
    };
    localStore.set("age", 25);
    localStore.set("name", "Tony");
    localStore.set("address", address);
    localStore.set("isSubscribed", false);

    const expectedOutput = {
      age: 25,
      name: "Tony",
      address: address,
      isSubscribed: false,
    };

    expect(localStore.getAll()).toEqual(expectedOutput);
  });
});
