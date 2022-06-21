var app = require('../app.js');

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var sinon = require('sinon');

describe("HBaseDao", function() {
    describe(".putRows()", function() {

        it.only("Should execute callback after inserting objects in HBase.", function(done) {

            var events = require('events');
            var app = new events.EventEmitter();
                app.monitorContract = function() {
                    console.log('putting rows');
                    this.emit('data');
                };

                app.on('data', function(){
                    console.log('notify event fired');
                    done(); //here's where you call the callback to assert that the event has fired
                });
               
        
           
        
        });
    });
});
