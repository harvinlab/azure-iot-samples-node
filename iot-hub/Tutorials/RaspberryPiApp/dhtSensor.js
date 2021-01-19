'use strict';

const DHT = require('node-dht-sensor');

// The DHT constructor options are optional.
const DEFAULT_OPTIONS = {
  type: 11, // DHT11
  pin:  4   // GPIO 4
}

function Sensor(options) {
  this.options = Object.assign(DEFAULT_OPTIONS, options || {});
  this.dht = new DHT();
}

Sensor.prototype.init = function (callback) {
  this.dht.initialize(this.options);
  callback();
}

Sensor.prototype.read = function (callback) {
  this.dht.read()
  .then((data) => {    
    callback(null, data);
  })
  .catch(callback);
}

module.exports = Sensor;
