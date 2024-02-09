import mysql from "mysql";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pets_db"
});

db.connect((err)=>{
    if (err) throw err;
    console.log("Connected to database");
});

export default db