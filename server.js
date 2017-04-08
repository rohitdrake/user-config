const express = require('express');
const forwarded = require('forwarded-for');
const port    = process.env.PORT || 3000;

let app = express();

app.use('/', express.static(__dirname+'/public'));

app.get('/userConfig', (req, res)=>{
  let objInfo = {};
  objInfo.language = req.headers['accept-language'];
  objInfo.software = (()=>{
    let localVariable;
    let text = req.headers['user-agent'];
    text.replace(/\(([^)])+\)/, (match)=>{
      localVariable = match;
    });
    return localVariable;
  })();
  let address = forwarded(req, req.headers);
  objInfo.ip = address.ip;
  res.send(objInfo);
});

app.listen(port, ()=> console.log("Server is listening on 3000"));
