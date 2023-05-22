'use strict';
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const items = selectAll('.item');
const btn = select('.btn');

btn.addEventListener('click', function () {
  console.log('Clicked!');
});
