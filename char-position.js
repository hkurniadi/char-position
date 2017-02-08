function countLetter(str) {
  str = str.split(' ').join('');
  //console.log(str);
  var storedLetters = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i]
    //var letterPos = [];
    if (storedLetters.hasOwnProperty(char)) {
      storedLetters[char]['numOfOccur'] += 1;
      storedLetters[char]['occurPos'].push(i);
    } else {
      storedLetters[char] = {};
      storedLetters[char]['numOfOccur'] = 1;
      storedLetters[char]['occurPos'] = [];
      storedLetters[char]['occurPos'].push(i);
    }
  }
  console.log(storedLetters);
}

var string = 'lighthouse in the house';
countLetter(string);


