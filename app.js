// webserver
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//cassandra
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'stackoverflow',
  username: 'cassandra',
  password: 'cassandra'
});

const query1 = 'INSERT INTO user_track (key, text, date) VALUES (?, ?, ?)';
const query2 = 'INSERT INTO user_track (key, text, date) VALUES (?, ?, ?)';
const queries = [
   { query: query1, params: ['hendrix1', 'Changed email1', new Date()]},
   { query: query2, params: ['hendrix2', 'Changed email2', new Date()] } 
];

client.batch(queries, { prepare: true });
console.log('Data updated on cluster');
