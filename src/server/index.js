const app = require('express')();
const port = process.env.PORT || 3001;

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', () => {
  console.log('user connected');
});

http.listen(port, () => {
  console.log('listening on *:3001');
});
