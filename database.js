import mysql from "mysql";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pets_db"
});

export default db