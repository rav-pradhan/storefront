import LocalStore from '../stores/LocalStore'

class Storefront {
  private stores: Array<LocalStore>

  constructor(stores: Array<LocalStore>) {
    this.stores = stores
  }

  public getStores(): Array<LocalStore> {
    console.log(this.stores)
    return this.stores
  }
}

describe("Storefront API", () => {
  test("that a storefront with a single LocalStore can be instantiated", () => {
    const localStore: LocalStore = new LocalStore()
    localStore.set("lang", "en")
    const stores: Storefront = new Storefront([localStore])
    expect(stores.getStores()).toHaveLength(1)
  })
})