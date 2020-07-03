const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 4321,
    user: 'postgres',
    password: 'postgres',
    database: 'mars',
})

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})
