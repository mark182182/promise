'use strict';

new Promise((resolve, reject) => {
  reject(new Error('REJECTED'));
}).catch(error => {
  onReject(error);
});

const onReject = error => {
  console.log(error.message);
}

Promise.resolve('HEY');

Promise.reject(new Error('AGAIN'));