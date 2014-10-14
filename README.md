# int2freq
---------------

[![Build Status](https://secure.travis-ci.org/coleww/int2freq.png)](http://travis-ci.org/coleww/int2freq)


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

```
int2freq(0, {tonic: 'A4', scale: 'minor'})
=> 440.000 // A4
int2freq(1, {tonic: 'A4', scale: 'minor'})
=> 493.883 // B4
int2freq(-2, {tonic: 'C3', scale: 'major'})
=> 110.000 // A2
//ETC. ETC.
```

You can pass the frequency values to a web audio buddy or what have you, and generate the inputs in some other manner based on whatever science you enjoy and participate in.

CURRENTLY ACCEPTABLE MUSICAL SCALES:

-major
-minor
-pentMaj
-pentMin

TODO:

[] add like way more scales
