// @flow
import { openDB } from 'idb';

async function foo() {
  const db = await openDB();

  let tx = db.transaction();
  const store = tx.objectStore();

  // $ExpectError
  store.get();
}
