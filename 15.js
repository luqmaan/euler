/*
 * 00   01  02  03
 * 10   11  12  13
 * 20   21  22  23
 * 30   31  32  33
 *
 */

var count = 0
next(20,20)
console.log( count ) 


function next(x, y) {
    if (x === 0 && y === 0)
		count++
   else if ( x === 0) 
      next(x, y-1) 
	else if ( y === 0 ) 
       next(x-1, y)
    else {
        next(x-1, y)
        next(x, y-1)
    }
}
