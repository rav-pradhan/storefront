export default interface IStore {
  set(key: string, value: any): any;
  get(key: string): any;
  getAll(): any;
  remove(key: string): void;
  clear(): void;
}
