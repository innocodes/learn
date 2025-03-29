const http = require('http');

function rqListener(req, res) {
    console.log('req obj here', req.url, req.method, req.headers);

    const url = req.url;

    if (url === '/') {
        
    }

    // This will stop the server
    // process.exit();

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');

    res.end();

}

// Node JS uses event driven architecture.

const server = http.createServer(rqListener);


// Here, node js listens for request
server.listen(3000);