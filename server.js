const express = require('express');
const forwarded = require('forwarded-for');
const port    = process.env.PORT || 3000;

let app = express();

app.get('/', (req, res)=>{
  let objInfo = {};
  let address = forwarded(req, req.headers);
  objInfo.ua = req.headers['user-agent'];
  objInfo.ua = typeof ua;
  objInfo.ip = address.ip;
  res.send(objInfo);
});

app.listen(port, ()=> console.log("Server is listening on 3000"));
