module.exports = {
  checkWordMatrix: function (matrix = [[]], words = []) {

  },

  getFittingWords: function (matrix = [[]], words = []) {

    if (matrix == [[]]) {
      return words;
    }

    // get letters used in matrix

    var letters = [];
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        letters.push(matrix[i][j]);
      }
    }

    // clear letters from duplicates

    letters = letters.filter((item, pos) => { return letters.indexOf(item) == pos; });

    // filter words with fitting letters
    var similarLetterWords = [];
    for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < letters.length; j++) {
        if (words[i].includes(letters[j])) {
          similarLetterWords.push(words[i]);
          break;
        }
      }
    }

    var fittingWords = {
      // potato: { vertical: [[-1, 14]], horizontal: [[8, -3]] },
    };

    for (var i = 0; i < similarLetterWords.length; i++) {
      var word = similarLetterWords[i];
      for (var j = 0; j < word.length; j++) {
        var letter = word[j];
        for (var k = 0; k < matrix.length; k++) {
          for (var l = 0; l < matrix[k].length; l++) {
            if (matrix[k][l] == letter) {
              if (fittingWords[word] == undefined) {
                fittingWords[word] = { vertical: [], horizontal: [] };
              }

              // vertically fitting
              // look up

              for (var m = j; m >= 0; m--) {

              }
            }
          }
        }
      }
    }


    return fittingWords;
  },

  generate: function (words = [], clues = []) {

    var matrix = [[]];

    // getFittingWords
    // read mattrix, if empty return rand word else return a list of words with fitting letters
    // select word rand
    // place word in matrix and pop from list
    // repeat until list is empty or no fitting words are found
    return "This is a crossword!"
  },
};
