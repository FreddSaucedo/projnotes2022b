/*
Winston ofrece 3 tipos de transportes:
1. Console
2. File
3. Http
*/
// Importar Winston
import Winston, { format } from 'winston';

// Se obtine la ruta a la raíz del proyecto
import appRoot from 'app-root-path';

// Destructurando modulos de format
const { combine, timestamp, label, printf, colorize } = format;

// Definiendo colores para cada tipo de error
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// Agregando el esquema de colores a Winston
Winston.addColors(colors);

// Creando formatos para la consola
const myConsoleFormat = combine(
  // Colores
  colorize({ all: true }),
  // Agregando una etiqueta
  label({ label: '🖋️' }),
  // Agregando fecha
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  // Función de impresion
  printf(
    (info) => `${info.label}: ${info.lavel}: ${info.timestamp}: ${info.printf}`
  )
);

// Creando formato para archivo
const myFileFormat = combine(
  // Quitando el color de texto de salida
  format.uncolorize(),
  // Agregando fecha
  timestamp({ format: 'DD-MM-YY HH-mm-ss' }),
  // Formato de archivo de salida
  format.json()
);

const options = {
  infoFile: {
    level: 'info',
    filename: `${appRoot}/server/logs/info.log`,
    handleExceptions: false,
    maxSize: 1048576, // 1MB
    maxFiles: 5,
    format: myFileFormat,
  },
  warnFile: {
    level: 'warn',
    filename: `${appRoot}/server/logs/warn.log`,
    handleExceptions: false,
    maxSize: 1048576, // 1MB
    maxFiles: 5,
    format: myFileFormat,
  },
  errorFile: {
    level: 'error',
    filename: `${appRoot}/server/logs/error.log`,
    handleExceptions: false,
    maxSize: 1048576, // 1MB
    maxFiles: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: myConsoleFormat,
  },
};

// Creamos una instancia del logger
const logger = Winston.createLogger({
  transports: [
    new Winston.transports.File(options.infoFile),
    new Winston.transports.File(options.warnFile),
    new Winston.transports.File(options.errorFile),
    new Winston.transports.Console(options.console),
  ],
  exitOnError: false, // No finaliza en excepciones no manejadas
});

// Esto sirve para acoplar morgan a winston
/* 
  morgan --> Winston --> [ transport info ]
*/
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

// Exportando el logger
export default logger;
