
const indexedDb = window.indexedDB;

// https://www.youtube.com/watch?v=6pM8c0tnwr4&t=477s
class Db {

    createConection(dbName, version, storageName) {
        let db;
        const request = indexedDb.open(dbName, version);
        request.onsuccess = () => {
            db = request.result;
            console.log("Open", db);
        }
        request.onupgradeneeded = () => {
            db = request.result;
            console.log("Created", db);
            db.createObjectStore(storageName);
        }
        request.onerror = (e) => {
            console.error(e);
        }
    }
}


// Models:

class User {

    db;
    Name = "Users";
    constructor(db) {
        this.db = db;
    }

    create({ firstName, lastName, email, password }) {
        //TODO;

    }
    async get(id) {
        //TODO


    }

    getAll() {
        //TODO


    }

    update(table) {
        //TODO
    }
    delete(id) {
        //TODO      
    }

}

//! Tests:

const dbConfig = { dbName: 'dbSibeeshPassion', version: '1.0', description: 'This is a client side database', zise: 2 * 1024 * 1024 }
const user = { firstName: "Efrain", lastName: "Delgado", email: "meLasComo@putas.com", password: "123PollitoIngles" }
/*
function a(){[...arguments].forEach(arg => {
    console.log(arg)
});}
*/

const Mydb = new Db(dbConfig);

const Efrain = new User(user);

Mydb.executeMigration(Efrain)