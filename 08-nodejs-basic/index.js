const message = (name) => {
    console.log(`Hello ${name}`);
 }
  
 message('JavaScript');

 const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);

const _ = require('lodash');
const myOddEvenArray = _.partition([1,2,3,4,5,6,9,10], n => n % 2);
console.log(myOddEvenArray);

const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', 'Dimas');

const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca file');
        return;
    }
    console.log(data);
};

fs.readFileSync(resolve(__dirname, 'notes.txt'), 'utf-8', fileReadCallback);
