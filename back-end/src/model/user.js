import { db } from '../db/db.js'

export const createUser = ({name, email, password}) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.run(sql, [name, email, password], function (error) {
            if (error) {
                reject(error);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users';
        db.all(sql, function (error, rows) {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};

export const deleteUser = ((id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.run(sql, [id], function (error) {
            if (error) {
                reject(error);
            } else {
                resolve(this.changes);
            }
        });
    });
});

export const updateUser = (({id, name, email, password}) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
        db.run(sql, [name, email, password, id], function (error) {
            if (error) {
                reject(error);
            } else {
                resolve(this.changes);
            }
        });
    });
});