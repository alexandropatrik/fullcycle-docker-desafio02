const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = 3000

const config = {
    host: 'db_desafio',
    user: 'root',
    password: 'root',
    database: 'desafio'
}

mysql.createConnection(config)
    .then(connection => {
        connection.execute(`create table if not exists people (id int auto_increment, name varchar(255), primary key (id));`)
            .then(() => {
                connection.end()
            })
    })

app.get('/', async (req,res) => {
    const connection = await mysql.createConnection(config)

    let randomName = (Math.random() + 1).toString(36).substring(2);

    const sql = `INSERT INTO people(name) VALUES ('${randomName}');` 
    connection.query(sql)
    
    let vret = '<h1>Full Cycle Rocks!</h1>'

    const [rows, fields] = await connection.execute('SELECT name FROM people');
    for (const row of rows) {
        vret += `<br /> ${row.name} `;
    }

    res.send(vret)

    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})