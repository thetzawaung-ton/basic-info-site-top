import express from 'express';
import path from 'path';
const app = express();

app.get('/', (req, res) => res.sendFile(sendHtml('index')));
app.get('/about', (req, res) => res.sendFile(sendHtml('about')));
app.get('/contact-me', (req, res) => res.sendFile(sendHtml('contact-me')));
app.get('/*splat', (req, res) => res.status(404).sendFile(sendHtml('404')));
const PORT = 8080;
app.listen(PORT, (error) => {
  if(error) {
    throw error
  }
  console.log(`Listening to port ${PORT}`)
})

const sendHtml = (file) => path.join(import.meta.dirname, `/${file}.html`)
