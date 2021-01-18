// OS (Operating System) Demo
const os = require('os'); // pull in 'os' module from Node core modules

// find Platform
console.log(os.platform()); // returns Win, Mac (Darwin), or Linux

// CPU Arch
console.log(os.arch()); // returns the CPU architecture -- this ex: x64

// CPU Core Info
console.log(os.cpus()); // returns the Core information for the CPU

// Free Memory
console.log(os.freemem()); // returns free mem on system
// Total Memory
console.log(os.totalmem()); // returns total mem on system

// Home Directory
console.log(os.homedir()); // returns home directory on System

// Uptime
console.log(os.uptime()); // returns how long (in seconds) the system has been on