'use strict';

const select = sector => document.querySelector('selector');
const selectAll = sector => document.querySelectorAll('selector');

const items = selectAll('.item');
const btn = select('.btn');

btn.addEventListener('click', function () {
  console.log('Clicked!');
});
