import pg from 'pg';

const { Pool } = pg;

const config = {
    host: 'localhost',
    port: 5432,
    database: 'practica_db',
    user: 'node_user',
    password: 'node'
}
 const pool = new Pool(config)

 pool.query('select now()', (err, res)=>{
    console.log(err, res)
    pool.end()
 })
