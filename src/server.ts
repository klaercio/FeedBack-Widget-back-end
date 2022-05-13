import express from 'express';

const app = express();

app.listen(3333, ()=>{
    console.log('HTTP SERVER RUNING in http://localhost/3333');
});

app.get('./users', (req, res) => {
    return res.send("hello world");
})

app.post('./feedbacks', (req, res) => {
    return res.send("hello world");
})