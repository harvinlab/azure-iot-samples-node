'use strict';

var DHT = require('node-dht-sensor');

// The DHT constructor options are optional.
const DEFAULT_OPTIONS = {
  type: 11, // DHT11
  pin:  4   // GPIO 4
}

function Sensor(options) {
  this.options = Object.assign(DEFAULT_OPTIONS, options || {});
}

Sensor.prototype.init = function (callback) {
  // nothing todo
  callback(null, data);
}

Sensor.prototype.read = function (callback) {
  DHT.read(this.options)
  .then((data) => {    
    callback(null, data);
  })
  .catch(callback);
}

module.exports = Sensor;
