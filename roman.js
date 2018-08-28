//!javascript
//convertor.js
exports.convert = function(num) {
 var romanNumBase = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNum = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<ints.length; i++){
      units(ints[i]);
  }
  function units(){
    numeral = romanNumBase[i*2];
    switch(ints[i]) {
      case 1:
        romanNum.push(numeral);
        break;
      case 2:
        romanNum.push(numeral.concat(numeral));
        break;
      case 3:
        romanNum.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNum.push(numeral.concat(romanNumBase[(i*2)+1]));
        break;
      case 5:
        romanNum.push(romanNumBase[(i*2)+1]);
        break;
      case 6:
        romanNum.push(romanNumBase[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNum.push(romanNumBase[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNum.push(romanNumBase[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNum.push(romanNumBase[i*2].concat(romanNumBase[(i*2)+2]));
      }
    }
  return romanNum.reverse().join("").toString();
}