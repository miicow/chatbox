const app = require('express')();
const port = process.env.PORT || 3001;

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', socket => {
  console.log('user connected');
  socket.on('chat message', function(msg) {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log('listening on *:3001');
});
