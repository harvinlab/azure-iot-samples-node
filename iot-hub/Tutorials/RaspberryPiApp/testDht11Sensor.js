'use strict';

const DhtSensor = require('./dhtSensor.js');

this.sensor = new DhtSensor({type:11, pin:4});
this.sensor.init(() => {
    this.inited = true;
});

var app = {
    read: function() {                
        this.sensor.read((err, data) => {
            if (err) {
                console.log('[Sensor] Read data failed due to:\n\t' + err.message);
            } else {
                console.log(`temp: ${data.temperature}°C, humidity: ${data.humidity}%`);
            }
        });

        setTimeout(function() {
            app.read();
        }, 2000);
    }
};

app.read();

/*
var sensor = require("node-dht-sensor");
 
sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});
*/