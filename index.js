const mysql = require("mysql2/promise");

connect();

async function connect() {
    try {
        // mysql db from docker 
        const con = await mysql.createConnection({
            "host":"localhost",
            "port":"3306",
            "user":"root",
            "password":"password",
            "database":"test"
        });
        // return promise

        //1
        /*
        const [rows,schema] = await con.query("SELECT * FROM EMPLOYEES");
        console.table(rows);
        */

        // 2
        const result = await con.query("SELECT * FROM EMPLOYEES");
        console.table(result[0]);

    } catch (ex) {
        console.error(ex);
    }
}