// Project Euler
// Problem 1

var answer = 0;
for(i=0; i<1000; i++) {
    if ( i%3 === 0 ) {
        answer += i;
    } else if (i%5 === 0) {
        answer += i;
    } else {
    }
}

document.write(answer);

