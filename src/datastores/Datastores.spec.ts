import Datastore from './Datastore'

describe("Datastores", () => {
  describe("Local Storage datastore", () => {
    test("that local storage datastore can set a key/value pair", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("greeting", "hello");
      expect(localStore.get("greeting")).toEqual("hello");
    });
    test("that local storage dataset can get an item by key", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("greeting", "hello");
      const got: string | null = localStore.get("greeting");
      expect(got).toEqual("hello");
    });
    test("that local storage datastore sets a number, and gets it as a number", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("age", 25);
      expect(localStore.get("age")).toEqual(25);
    });
    test("that a null value can be stored", () => {
      const localStore: Datastore = new Datastore(localStorage);
      localStore.set("empty", null);
      expect(localStore.get("empty")).toEqual(null);
    })
  });
});
