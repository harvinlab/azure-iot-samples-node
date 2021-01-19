'use strict';

var DHT = require('node-dht-sensor');

// The DHT constructor options are optional.
const DEFAULT_OPTIONS = {
  type: 11, // DHT11
  pin:  4   // GPIO 4
}

function Sensor(options) {
  options = Object.assign(DEFAULT_OPTIONS, options || {});
}
  
  Sensor.prototype.init = function (callback) {
    DHT.initialize(options)
      .then(callback)
      .catch((err) => {
        console.error(err);
      });
  }
  
  Sensor.prototype.read = function (callback) {
    DHT.read()
    .then((data) => {    
      callback(null, data);
    })
    .catch(callback);
  }

module.exports = Sensor;
