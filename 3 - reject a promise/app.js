'use strict';

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
}).then(null, error => {
  onReject(error);
});

const onReject = error => {
  console.log(error.message);
}