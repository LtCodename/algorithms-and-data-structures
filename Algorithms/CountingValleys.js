function countingValleys(s) {
 let level = 'sea';
 let altitude = 0;
 let valleys = 0;

 for (let i = 0; i <= s.length; i++) {
     if (s[i] === 'D') {
         altitude -= 1;
     } else {
         altitude += 1
     }

     if (altitude > 0) {
         level = 'above';
     } else if (altitude < 0) {
         level = 'below'
     } else {
         level = 'sea'
     }

     if (level === 'sea' && s[i] !== 'D') {
         valleys += 1
     }
 }

 return valleys;
}

console.log(countingValleys('DDUUDDUUUUDDUUDDDDUUDDUUDDDDDUUUUUUUUUUUDDDDDD'));
