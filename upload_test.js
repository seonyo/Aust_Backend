const express = require('express')
const multer = require('multer')

const port = 3000

const storage = multer.diskStorage({
    destination: function (req, file, cb){      //저장경로
        cb(null, './uploads')
    },
    filename: function (req, file, cb){     //파일명 변경
        console.log(file.originalname)
        console.log(file.mimetype)
        const filename = Date.now() + "_" + file.originalname       //현재시각으로 파일 몀을 저장
        cb(null, filename)
    }
})

//{storage}로 적으면 {storage:storage}이다
const upload = multer({storage})        //미들웨어 (어디에 저장해야 될 지 정보를)
const app = express()

app.post("/upload", upload.single("my_file"), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.send("ok")
})

app.post("/photos", upload.array("photo"), (req, res)=>{
    console.log(req.files)
    res.send("ok")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})