'use strict';

var dht = require('node-dht-sensor');

// The DHT constructor options are optional.
const DEFAULT_OPTIONS = {
  type: 11, // DHT11
  pin:  4   // GPIO 4
}

function Sensor(options) {
  this.options = Object.assign(DEFAULT_OPTIONS, options || {});
}

Sensor.prototype.init = function (callback) {
  //dht.initialize(this.options.type, this.options.pin);
  callback();
}

Sensor.prototype.read = function (callback) {
  var data = dht.read(this.options.type, this.options.pin);
  callback(null, data);
}

module.exports = Sensor;
