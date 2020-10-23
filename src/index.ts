import Datastore from './stores/LocalStore'

const f: Datastore = new Datastore(localStorage)
const g: Datastore = new Datastore(localStorage)

f.set("hello", "world");
g.set("hello", "world");

console.log(f)
console.log(g)
