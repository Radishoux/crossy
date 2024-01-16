const { all } = require("axios");

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
    for (var i = 0; i < matrix[(matrix.length/2)].length; i++) {
      var word = "";
      for (var j = 0; j < matrix.length; j++) {
        if (matrix[j][i] != undefined) {
          word += matrix[j][i];
        }
      }
      words.push(word);
    }

    console.log(words, "getwords words 1");

    words = words.filter((item, pos) => { return item && item.length > 1; })

    console.log(words, "getwords words 2");


    return words
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

    letters = letters.filter((item, pos) => { return (item != '') && (letters.indexOf(item) == pos); });

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

    if (matrix == [[]]) {
      return [[words[Math.floor(Math.random() * words.length)]]];
    }


    for (var z = 0; z < 30; z++) {
      matrix.push([""]);
      matrix.unshift([""]);
      for (let y = 0; y < matrix.length; y++) {
        matrix[y].push("");
        matrix[y].unshift("");
      }
    }

    console.log(matrix, "matrix"); // ca c'est bon

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

    words = this.getFittingWords(matrix, words);

    var allWords = words.concat(this.getWords(matrix));

    console.log(words, allWords, "words");

    words.forEach(word => {

      var probable = [
        // [
        //   [
        //     ["p", "o", "s", "s", "i", "b", "l", "e"],
        //     ["", "", "t", "", "", "", "", ""],
        //     ["", "", "a", "", "", "", "", ""],
        //     ["", "", "b", "l", "e", "u", "", ""],
        //     ["", "", "l", "", "", "", "", ""],
        //     ["", "", "e", "", "", "", "", ""]
        //   ],
        //   [
        //     ["", "", "", "", "", "s", "", ""],
        //     ["", "", "", "", "", "t", "t", ""],
        //     ["", "", "", "", "", "a", "a", ""],
        //     ["p", "o", "s", "s", "i", "b", "l", "e"],
        //     ["", "", "", "", "", "l", "l", ""],
        //     ["", "", "", "", "", "e", "e", ""],
        //   ]
        // ]
      ];

      for (var l = 0; l < word.length; l++) {
        //todo

      }

      probable.forEach(matrix => {
        var atmWords = this.getWords(matrix);

        if (atmWords.filter(item => allWords.indexOf(item) < 0).length < 1) {
          possible.push(matrix);
        }

      });

    });

    return possible;
  },

  dispo: function (matrix = [[]], x, y) {
    return (matrix[y][x] == '') || false;
  },

  addWord: function (matrix = [[]], word, x, y, dx, dy) {
    var newmatrix = matrix;
    for (var i = 0; i < word.length; i++) {
      newmatrix[y + i * dy][x + i * dx] = word[i];
    }
    return newmatrix;
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

    return matrix;
  },
};