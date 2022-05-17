const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
//app.use(express.static(path.join(__dirname, './portfolio/build')));

//const options = {
//    key: fs.readFileSync("./server.key","utf8"), // Replace with the path to your key
//    cert: fs.readFileSync("./flow-crt.crt","utf8"), // Replace with the path to your certificate
//    ca: [fs.readFileSync("./bundle1.crt","utf8"), fs.readFileSync("./bundle2.crt","utf8"), fs.readFileSync("./bundle3.crt","utf8")]
//}


/*app.use((req, res, next) => {
 console.log(path.join(__dirname, 'build', 'index.html'))
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/
//^^^^^ THE ABOVE DOESNT WORK, LOSES CSS, HTTP @ least
//Solution:
//https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
app.use(express.static("build"));
const https_port = 443;
const http_port = 3000;

http.createServer(app).listen(http_port,() => {
	console.log("Running on port 80");
});


//http.createServer((req,res) => {
	//res.writeHead(301, { "Location":"https://foothillsflowyoga.com"})
	//res.end();
//	console.log("running on port 80");
//}).listen(80);

//https.createServer(options, app).listen(https_port,() => {
//    console.log('Server listening on https port ' + https_port + " ,And http is on: " + http_port);
//});
