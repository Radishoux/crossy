const { all } = require("axios");

module.exports = {
  // todo, get words qui choppe les mots espacés par des espaces
  getWords: function (matrix = [[]]) {
    var words = [];
    for (var i = 0; i < matrix.length; i++) {
      var word = "";
      for (var j = 0; j < matrix[i].length; j++) {
        word += matrix[i][j];
      }
      words.push(word);
    }
    for (var i = 0; i < matrix[(matrix.length / 2)].length; i++) {
      var word = "";
      for (var j = 0; j < matrix.length; j++) {
        if (matrix[j][i] != undefined) {
          word += matrix[j][i];
        }
      }
      words.push(word);
    }

    words = words.filter((item, pos) => { return item && item.length > 1; })

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
        var letter = word[l];
        for (let y = 0; y < matrix.length; y++) {
          for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == letter) {

              if (this.dispo(matrix, x + 1, y) && this.dispo(matrix, x - 1, y)) {
                probable.push(this.addWord(matrix, word, x, y, 1, 0, l));
              }

              if (this.dispo(matrix, x, y + 1) && this.dispo(matrix, x, y - 1)) {
                probable.push(this.addWord(matrix, word, x, y, 0, 1, l));
              }

            }

          }

        }
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
  // bug il place au mauvais endroit
  addWord: function (matrix = [[]], word, x, y, dx, dy, l) {
    var newmatrix = this.cloneMatrix(matrix);

    if (dx == 1) {
      x -= l;
    } else {
      y -= l;
    }

    for (var i = 0; i < word.length; i++) {
      newmatrix[y + dy * i][x + dx * i] = word[i];
    }

    return newmatrix;
  },

  cloneMatrix: function (matrix = [[]]) {
    var newmatrix = [];
    for (var i = 0; i < matrix.length; i++) {
      newmatrix[i] = matrix[i].slice();
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