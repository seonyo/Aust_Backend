const mysql = require ('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : '990327',
    database : 'hozu'
})

pool.query('SELECT 1 FROM dual', function(err, rows, fields) {      // dual은 가상 테이블에 실행 시켜 보는 것
    console.log(rows)
    pool.end()
})