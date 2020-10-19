import IDatastore from './IDatastore'

export default class Datastore implements IDatastore {
  private store: Storage;

  constructor(datastore: Storage) {
    this.store = datastore;
  }

  public set(key: string, value: any) {
    const parsedValue = this.parseValueToSet(value);
    this.store.setItem(key, parsedValue)
  }

  private parseValueToSet(value: any): any {
    return typeof value === "string" ? value : JSON.stringify(value);
  }

  public get(key: string): any {
    const value: any = this.store.getItem(key);
    return this.getTypedValue(value);
  }

  private getTypedValue(value: any): any {
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
}