class RegisterController {
    index(db, req, res) {
        db.all(`SELECT * FROM register`, (err, rows) => {
            try {
                res.json(rows);
            } catch {
                console.error(err);
            };
        });
    };

    store(db, req, res) {
        const {
            name,
            birth,
            nationality,
            gender,
            email
        } = req.body;

        const stmt = db.prepare(`INSERT INTO register (name, birth, nationality, gender, email) VALUES(?, ?, ?, ?, ?)`);
        stmt.run(name, birth, nationality, gender, email);
        stmt.finalize();
        res.json({ data: "Register added on success"});
    };

    update(db, req, res) {
        const {
            name,
            birth,
            nationality,
            gender,
            email
        } = req.body;
        const { id } = req.params;
        const stmt = db.prepare(`UPDATE register SET name = ?, birth = ?, nationality = ?, gender = ?, email = ? WHERE id = ?`);
        stmt.run(name, birth, nationality, gender, email, id);
        stmt.finalize();
        res.json({ data: "Register updated on success"});
    };

    delete(db, req, res) {
        const { id } = req.params;
        const stmt = db.prepare(`DELETE FROM register WHERE id = ?`);
        stmt.run(id);
        stmt.finalize();
        res.json({ data: "Register deleted on success"});
    };
};

module.exports = RegisterController;