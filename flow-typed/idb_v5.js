declare module 'idb' {
  declare export function openDB(): Promise<DB>;

  declare export interface DB {
    transaction(): Transaction;
  }

  declare export interface Transaction {
    objectStore(): ObjectStore;
  }

  declare export interface ObjectStore {
    get(key: string): boolean;
  }
}
