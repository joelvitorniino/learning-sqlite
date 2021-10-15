const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/joel/Documents/learning-sqlite/src/database/database.sqlite');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS register (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(45) NOT NULL,
        birth DATE NOT NULL,
        nationality VARCHAR(45) NOT NULL DEFAULT 'Brazilian',
        gender CHECK(gender IN ('M', 'F')),
        email VARCHAR(45) NOT NULL
    );`);
});

module.exports = db;