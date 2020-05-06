// @flow

export function openDB(): Promise<DB>  {
  return (null:any);
}

interface DB {
  transaction(): Transaction;
}

interface Transaction {
  objectStore(): ObjectStore;
}

interface ObjectStore {
  get(key: string): boolean;
}
