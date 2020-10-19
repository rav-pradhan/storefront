export default interface IDatastore {
  set(key: string, value: any): any
  get(key: string): any
}