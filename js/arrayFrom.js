'use strict';
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

btn.addEventListener('click', function () {
  const items = selectAll('.item');
  const btn = select('.btn');
  console.log('Clicked!');
});
