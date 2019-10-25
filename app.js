//2019-10-22
//git clone from the link below
//https://www.youtube.com/watch?v=ZbtZ_79UmjI&t=83s

//Commit testing 
//Commit testing from Desktop
const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')


//creating the server
http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");