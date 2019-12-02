'use strict';

new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
}).then(console.log, error => onReject(error));

const onReject = error => {
  console.log(error.message);
}