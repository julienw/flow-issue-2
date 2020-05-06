// @flow
  declare function openDB(): Promise<DB>;

  declare interface DB {
    transaction(): Transaction;
  }

  declare interface Transaction {
    objectStore(): ObjectStore;
  }

  declare interface ObjectStore {
    get(key: string): boolean;
  }

async function foo() {
	const db = await openDB();

    let tx = db.transaction();
    const store = tx.objectStore();

    // $ExpectError
    store.get();
}
