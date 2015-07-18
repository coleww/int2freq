# int2freq
---------------

[![Build Status](https://secure.travis-ci.org/coleww/int2freq.png)](http://travis-ci.org/coleww/int2freq)

[![NPM](https://nodei.co/npm/int2freq.png)](https://nodei.co/npm/int2freq/)

returns a musical frequency from the western scale given a tonic note (_A.K.A._ the **ZEROETH** note), a scale, and a positive/negative integer/index/note-thing.

{ _just **imagine**_ a picture of john cage right here }

Ok so like pop music is kind of easy if you know how scales work but that is boring math so lets make computer do this for us.

So what we have is maybe a classic C MAJOR scale which is composed of the notes:

- C
- D
- E
- F
- G
- A
- B

And so (_in this instance_) if you give int2freq the integer 0, it will return a C. If you pass it a 1, it will go one hop up the scale ladder to a D. If you give it a -2, it will make two hops down the scale chute to an A. FUN!

### INSTALLL

`npm install int2freq`

### EXAMPLES

```
var int2freq = require('int2freq)
int2freq(0, {tonic: 'A4', scale: 'minor'})
=> 440.000
int2freq(1, {tonic: 'A4', scale: 'minor'})
=> 493.883
int2freq(-2, {tonic: 'C3', scale: 'major'})
=> 110.000
//ETc. etc.

int2freq.scales
=>  get an array of scale keys!
int2Freq.notes
=> get an array of note strings!
```

You can pass the frequency values to a web audio buddy or what have you, and generate the inputs in some other manner based on whatever science you enjoy and participate in.

int2freq can handle positive/negative indexes of arbitrary value (_AKA_ **-17** or **9**), however if yr index ends up out of range for that tonic/scale you will have to handle the undefined's yrself. Deal with it.

### CURRENTLY ACCEPTABLE MUSICAL SCALES:

- major
- minor
- pentMaj
- pentMin
- blues

### CURRENT ACCEPTABLE MUSICAL TONICS:

```
'A0', 'A#0', 'B0', 'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1',
...
'A7', 'A#7', 'B7', 'C8'
```

### TODO:

[] add, like, way more scales
