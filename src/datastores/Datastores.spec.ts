import Datastore from "./Datastore";

describe("Datastores interactions", () => {
  describe("Datastore", () => {
    test("the datastore can set a key/value pair", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("greeting", "hello");
      expect(localStore.get("greeting")).toEqual("hello");
    });
    test("the datastore can get an item by key", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("greeting", "hello");
      localStore.set("age", 25);
      localStore.set("isSubsribed", false);

      const gotString = localStore.get("greeting");
      expect(gotString).toEqual("hello");

      const gotNumber = localStore.get("age");
      expect(gotNumber).toEqual(25);

      const gotBoolean = localStore.get("isSubscribed");
      expect(gotBoolean).toBeFalsy();
    });
    test("a key/value pair can be removed from the datastore", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("isCold", true);
      localStore.remove("isCold");
      expect(localStore.get("isCold")).toEqual(null);
    });
    test("a datastore can be cleared entirely", () => {
      const sessionStore: Datastore = new Datastore(sessionStorage);
      sessionStore.set("age", 25);
      sessionStore.set("name", "Tony");
      sessionStore.clear();
      expect(sessionStore.get("age")).toEqual(null);
      expect(sessionStore.get("name")).toEqual(null);
    });
    test("a datastore can get all key value pairs and return it as an object", () => {
      const sessionStore: Datastore = new Datastore(sessionStorage);

      const address = {
        street: "ABC St.",
        county: "County",
        country: "Country",
        postcode: "1234 ABC",
      };
      sessionStore.set("age", 25);
      sessionStore.set("name", "Tony");
      sessionStore.set("address", address);
      sessionStore.set("isSubscribed", false);

      const expectedOutput = {
        age: 25,
        name: "Tony",
        address: address,
        isSubscribed: false,
      };

      expect(sessionStore.getAll()).toEqual(expectedOutput);
    });
  });
});
