'use strict';

const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const items = selectAll('.item');
const btn = select('.btn');

btn.addEventListener('click', function () {
  const txns = Array.from(items);
  console.log(txns.map(el => el.textContent.replace('$', '')));
});
