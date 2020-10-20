import { parse } from "@babel/core";
import IStore from "./IStore";

export default class Datastore implements IStore {
  private store: Storage;

  constructor(datastore: Storage) {
    this.store = datastore;
  }

  public set(key: string, value: any) {
    const parsedValue = this.parseValueToSet(value);
    this.store.setItem(key, parsedValue);
  }

  public get(key: string): any {
    const value: any = this.store.getItem(key);
    return this.getTypedValue(value);
  }

  public getAll(): any {
    let objectStore: { [key: string]: any } = {};
    Object.entries(this.store).forEach((entry) => {
      const [key, value] = entry;
      objectStore[key] = this.getTypedValue(value);
    });
    return objectStore;
  }

  public remove(key: string): void {
    this.store.removeItem(key);
  }

  public clear(): void {
    this.store.clear();
  }

  private parseValueToSet(value: any): any {
    return typeof value === "string" ? value : JSON.stringify(value);
  }

  private getTypedValue(value: any): any {
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
}
