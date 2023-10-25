// require => import 구문이랑 비슷한 역할
const { error } = require('console')
const express = require('express')
const app = express()
//포트 번호
const port = 3000      

// GET 요청
// 주소 "/" 
// req => 요청 메시지 객체, res => 응답 메시지 객체
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/hello', (req, res) => {
    res.header("Content-Type", "text/plain")
    res.send("<h1>Hello</h1>")
})

app.get("/data", (req, res)=>{
    res.json({name : "sun", age : 20})
})

let array=[]
app.get("/array", (req, res) => {
    res.json(array);
})

app.post("/array", (req, res) => {
    array.push({content : array.length+1})
    res.json({result : "ok"});
});

app.delete("/array", (req,res)=>{
    array = []
    res.json({result : "ok"});
});


app.listen(port , ()=> {
    console.log(`Example app listening on port ${port}`);
})