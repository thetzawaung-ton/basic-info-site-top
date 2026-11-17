import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
  const {filePath, statusCode} = getFilePath(req.url);
  fs.readFile(filePath, 'utf8', (error, data) => {
    if(error) {
      console.log(error);
      res.writeHead(500, {'content-type': 'text/html'})
      res.end('500 internal error')
      return
    }
    res.writeHead(statusCode, {'content-type': 'text/html'});
    res.end(data);
  })
})


const getFilePath = (name) => {
  if(name === "/") {
    return {filePath: './index.html', statusCode: 200}
  } else if(name === '/about' || name === '/contact-me') {
    return {filePath: `.${name}.html`, statusCode: 200}
  } else {
    return {filePath: './404.html', statusCode: 404}
  }
}

server.listen(8080);