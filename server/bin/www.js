#!/usr/bin/env node

/**
 * Module dependencies.
 */
// ES5 👇
// var app = require('../app');
// ES6 👇
import http from 'http';
import app from '../app';
import debug from '../services/debugLogger';
import configKeys from '../config/configKeys';

const port = normalizePort(configKeys.port);
const server = http.createServer(app);
/**
 * Get port from environment and store in Express.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind =
    typeof port === 'string'
      ? // ? 'Pipe ' + port
        `Pipe ${port}`
      : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  // Desestrecuturando port de addr
  const { port } = addr;
  debug(`🎈 Listening on http://localhost:${port}`);
}

app.set('port', port);

/**
 * Create HTTP server.
 */

// app es una funcion de tipo middleware (codigo intermediario)
// (req, res) =>{ ...res.send("algo") }

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

/**
 * Event listener for HTTP server "error" event.
 */
