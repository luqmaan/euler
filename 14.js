"use strict";

var seed = 999999
var stop = 0

var lens = []
var maxlen = 0
var maxseed = 0

while ( seed > stop ) {
    next(seed, 0, function(chain) {
        console.log ( seed + " -> " +  chain)
        if ( chain > maxlen ) {
            maxlen = chain
            maxseed = seed
        }
    })
    seed--
}

console.log ( "seed -> len" )
console.log ( maxseed + " -> " + maxlen ) 

function next( num, chain, callback ) {
    if (num > 1)
        next ( num % 2 === 0 ? num / 2 : (num * 3) + 1, ++chain, callback )
    else
        callback( chain )
}
// (837799,524)
