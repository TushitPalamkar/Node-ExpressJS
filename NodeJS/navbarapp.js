const http=require('http');
const {readFileSync}=require('fs');
const homepage=readFileSync('./navbar-app/index.html')
const homestyles=readFileSync('./navbar-app/styles.css')
const homeimage=readFileSync('./navbar-app/logo.svg')
const homelogic=readFileSync('./navbar-app/browser-app.js')

const server=http.createServer((req,res)=>
{
    if(req.url=='/')
        {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(homepage);
            res.end();
        }
        else if(req.url==='/about')
            {
                res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>About Page</h1>');
            res.end();
            }
        else if(req.url==='/styles.css')
            {
                res.writeHead(200,{'content-type':'text/css'})
                res.write(homestyles)
                res.end();
            }
        else if(req.url==='/logo.svg')
            {
                res.writeHead(200,{'content-type':'image/svg+xml'})
                res.write(homeimage);
                res.end();
            }
            else if(req.url=='/browser-app.js')
                {
                    res.writeHead(200,{'content-type':'text/javascript'});
                    res.write(homelogic);
                    res.end();
                }
        else
            {
                res.writeHead(404,{'content-type':'text/html'})
            res.write('Page not found');
            res.end();
            }
})
server.listen(5000);