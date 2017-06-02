"use strict"

let quotes = require('./AA-text');

const random_quote = () => quotes[Math.floor(Math.random() * quotes.length)]

const random_paragraph = () => {
  let
    num = Math.floor(Math.random() * (6 - 3 + 1) + 3),
    lines = ''
  ;

  for (var i = 0; i < num; i++) { lines += (random_quote() + ' '); }

  return lines;
}

exports.ipsum = function(num) {
  let ipsum = [];

  while ( ipsum.length < num ) { ipsum.push(random_paragraph()); }

  return ipsum;
}
