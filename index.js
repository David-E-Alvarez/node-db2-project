const server = require('./server.js');

server.get('/', (req, res) => res.send('Hello World!'));

server.listen(5000, () => console.log('server running on port 5000'));

