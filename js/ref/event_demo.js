// Events and Events Listeners
const EventEmitter = require('events'); // get the events module with EventEmitter

// Create class
class MyEmitter extends EventEmitter {};

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event'); // this will fire off the "Event Fired!" log when 'node event_demo' is run