module.exports = {
  getWords: function (matrix = [[]]) {
    var words = [];
    for (var i = 0; i < matrix.length; i++) {
      var word = "";
      for (var j = 0; j < matrix[i].length; j++) {
        word += matrix[i][j];
      }
      words.push(word);
    }
    for (var i = 0; i < matrix[0].length; i++) {
      var word = "";
      for (var j = 0; j < matrix.length; j++) {
        word += matrix[j][i];
      }
      words.push(word);
    }

    return words.filter((item, pos) => { return item.length>1 ; })
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

    letters = letters.filter((item, pos) => { return (item!='') && (letters.indexOf(item) == pos)  ; });

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

    return similarLetterWords;
  },

  getMatrixes: function (matrix = [[]], words = []) {

    var possible = [
      // [
      //   [
      //     ["p", "o", "s", "s", "i", "b", "l", "e"],
      //     ["", "", "t", "", "", "", "", ""],
      //     ["", "", "a", "", "", "", "", ""],
      //     ["", "", "b", "", "", "", "", ""],
      //     ["", "", "l", "", "", "", "", ""],
      //     ["", "", "e", "", "", "", "", ""]
      //   ],
      //   [
      //     ["", "", "", "", "", "s", "", ""],
      //     ["", "", "", "", "", "t", "", ""],
      //     ["", "", "", "", "", "a", "", ""],
      //     ["p", "o", "s", "s", "i", "b", "l", "e"],
      //     ["", "", "", "", "", "l", "", ""],
      //     ["", "", "", "", "", "e", "", ""],
      //   ]
      // ]
    ];



    return possible;
  },

  generate: function (words = [], clues = [], maxwords = 10, maxtries = 100) {

    var matrix = [
      ["c", "a", "r", "r", "o", "t", "t", "e"],
      ["", "", "", "", "", "o", "", ""],
      ["", "", "", "", "", "m", "", ""],
      ["", "", "", "", "", "a", "", ""],
      ["", "", "", "", "", "t", "", ""],
      ["", "", "", "b", "l", "e", "u", ""]
    ];

    // getFittingWords
    // read mattrix, if empty return rand word else return a list of words with fitting letters
    // select word rand
    // place word in matrix and pop from list
    // repeat until list is empty or no fitting words are found
    return matrix;
  },
};