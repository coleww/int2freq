var test = require('tape')
var int2freq = require('./')

test('converts stuff', function(t){
  t.plan(1)
  t.equal(int2freq(0, {tonic: 'A4', scale: 'major'}), 440.000)
})

test('goes up', function(t){
  t.plan(1)
  t.equal(int2freq(1, {tonic: 'A4', scale: 'major'}), 493.883)
})

test('goes negative', function(t){
  t.plan(1)
  t.equal(int2freq(-2, {tonic: 'C3', scale: 'major'}), 110.000)
})

test('does other scales', function(t){
  t.plan(2)
  t.equal(int2freq(-3, {tonic: 'A4', scale: 'pentMaj'}), 277.183)
  t.equal(int2freq(3, {tonic: 'A4', scale: 'pentMin'}), 659.255)
})

test('allows for range of A0-C8', function(t){
  t.plan(2)
  t.equal(int2freq(2, {tonic: 'A7', scale: 'minor'}), 4186.01)
  t.equal(int2freq(-1, {tonic: 'B0', scale: 'minor'}), 27.5000)
})

test('complains about out of range inputs', function(t){
  t.plan(2)
  t.equal(int2freq(-1, {tonic: 'A0', scale: 'pentMaj'}), undefined)
  t.equal(int2freq(1, {tonic: 'C8', scale: 'minor'}), undefined)
})

test('throws error on bad tonic', function(t){
  t.plan(1)
  t.throws(function() {int2freq(-1, {tonic: 'oblong', scale: 'pentMaj'})}, /tonic/)
})

test('throws error on bad scale', function(t){
  t.plan(1)
  t.throws(function() {int2freq(0, {tonic: 'A0', scale: 'hairy'})}, /scale/)
})

test('exports scale names', function(t){
  t.plan(1)
  t.ok(Array.isArray(int2freq.scales))
})
