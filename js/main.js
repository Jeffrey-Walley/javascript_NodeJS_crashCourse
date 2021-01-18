const Logger = require('./logger'); // calls exported Logger class from the other js module

// Instantiate logger
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data)); // data is the Callback 


logger.log('Hello World'); // this ex: returns "Called Listener { id: 'uuid #' msg: 'Hello World' }" when executing 'node main' in the terminal below

logger.log('This msg has a unique uuid than any other');
logger.log('If you look at this message\'s uuid then you will notice it is unique');
logger.log('The next message has a different uuid then this one, still uuid v4 format, though');
logger.log('This still has a unique uuid');

// This will return a line with "Called Listener... " for each logger.log -- each will display a unique uuid and the message contained behind it