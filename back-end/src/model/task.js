import { db } from '../db/db.js'

export const createTask = (({title, description, user_id}) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)'
        db.run(sql, [title, description, user_id], function(error) {
            if (error) {
                reject(error);
            } else {
                resolve(this.lastID);
            }
        });
    });
});

export const getTask = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM tasks';
        db.all(sql, function(error, rows) {
            if (error) {
                reject(error);
            } else {
                resolve(rows)
            }
        })
    });
};

export const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM tasks WHERE id = ?'
        db.run(sql, [id], function(error) {
            if (error) {
                reject(error);
            } else {
                resolve(this.changes);
            }
        });
    });
};

export const updateTask = (({id, title, description, user_id}) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE tasks SET title = ?, description = ?, user_id = ? WHERE id = ?'
        db.run(sql, [title, description, user_id, id], function(error) {
            if (error) {
                reject(error);
            } else {
                resolve(this.changes);
            }
        });
    });
});