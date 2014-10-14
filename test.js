var test = require('tape')
var int2freq = require('./')

test('converts stuff', function(t){
  t.plan(1)
  t.equal(int2freq({tonic: 'A4', scale: 'major'}, 0), 440.000)
})

test('goes up', function(t){
  t.plan(1)
  t.equal(int2freq({tonic: 'A4', scale: 'major'}, 1), 493.883)
})

test('goes negative', function(t){
  t.plan(1)
  t.equal(int2freq({tonic: 'C3', scale: 'major'}, -2), 110.000)
})

test('does other scales', function(t){
  t.plan(2)
  t.equal(int2freq({tonic: 'A4', scale: 'pentMaj'}, -3), 277.183)
  t.equal(int2freq({tonic: 'A4', scale: 'pentMin'}, 3), 659.255)
})

test('allows for range of A0-C8', function(t){
  t.plan(2)
  t.equal(int2freq({tonic: 'A7', scale: 'minor'}, 2), 4186.01)
  t.equal(int2freq({tonic: 'B0', scale: 'minor'}, -1), 27.5000)
})

test('complains about out of range inputs', function(t){
  t.plan(2)
  t.equal(int2freq({tonic: 'A0', scale: 'pentMaj'}, -1), undefined)
  t.equal(int2freq({tonic: 'C8', scale: 'minor'}, 1), undefined)
})

