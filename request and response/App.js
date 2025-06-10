const http = require("http")

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
if(req.url==="/"){
    res.end("<h1>Hello World</h1>")
}
    else if(req.url==='/home'){
        res.end("<h1>Welcome home</h1>")
    }else if(req.url==="/about"){
        res.end("<h1>Welcome to about us</h1>")
    }else{
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(3000, () =>{
    console.log("Server is running")
})