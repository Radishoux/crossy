module.exports = {
  checkWordMatrix: function (matrix = [[]], words = []) {

  },

  getFittingWords: function (matrix = [[]], words = []) {

    if (matrix.length == 0) {
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
