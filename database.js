/* database conection */
import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pets_db"
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("Connected to database")
  });