// require => import 구문이랑 비슷한 역할
const { error } = require('console')
const express = require('express')
const app = express()
//포트 번호
const port = 3000      

//Post "/calc1/100/200"
// 데이터를 "주소"를 통해서 보내기
app.post("/calc1/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1       //+ 붙이면 parseInt처럼 형변환이 됨
    const num2 = +req.params.nun2
    res.json({result: num1 + num2})
})

// POST /calc2?num1=100&num2=200
// 데이터를 "쿼리스트링"을 통해서 보내기 (쇼핑몰에서 많이 씀)
app.post("/calc2", (req, res)=>{       
    const num1 = req.query.num1   
    const num2 = +req.query.nun2
    res.json({result: num1 + num2})
})

app.listen(port , ()=> {
    console.log(`Example app listening on port ${port}`);
})