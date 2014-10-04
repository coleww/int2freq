var test = require('tape');
var int2freq = require('./');

test('converts stuff', function(t){
  t.plan(1);
  t.equal(int2freq({tonic: 'A4', scale: 'major'}, 0), 440.000);
});

test('goes up', function(t){
  t.plan(1);
  t.equal(int2freq({tonic: 'A4', scale: 'major'}, 1), 493.883);
});

test('goes negative', function(t){
  t.plan(1);
  t.equal(int2freq({tonic: 'C3', scale: 'major'}, -2), 110.000);
});








  // t.equal(int2freq({tonic: 'A4', scale: 'pentatonic'}, 0), 440.000);
  // t.equal(int2freq({tonic: 'A4', scale: 'minor'}, 1), 493.883);
  // t.equal(int2freq({tonic: 'C3', scale: 'major'}, -2), 110.000);