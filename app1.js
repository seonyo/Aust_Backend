// require => import 구문이랑 비슷한 역할
const express = require('express')
const app = express()
//포트 번호
const port = 3000      

app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.listen(port , ()=> {
    console.log(`Example app listening on port ${port}`);
})