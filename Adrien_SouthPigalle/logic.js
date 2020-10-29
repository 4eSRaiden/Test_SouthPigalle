//Exercice 1

function multipleNumbers(x) {
  var contains = false;
  for (let i = 0; i < x.length; i++) {
    if (isNaN(x[i]) == false) {
      contains = true;
    }
  }
  return contains;
}

//Exercice 2

function checkArray(x) {
  var check = false;
  if (x.isArray() == true) {
    x.forEach((x) => {
      if (x["total"] !== undefined && x["total"] <= 100 && x["total"] >= 50)
        check = true;
    });
    return check;
  } else {
    return check;
  }
}

//Exercice 3

function reverseWords(x) {
  var words = x.split(" ");
  var newWords = [];
  words.forEach((word) => {
    word = word.split("").reverse().join("");
    newWords.push(word);
  });
  return newWords.join(" ");
}

//Exercice 4

function manipString(array, condition) {
  switch (condition) {
    case "asc":
      return array.sort();
    case "desc":
      return array.sort(function (a, b) {
        return b - a;
      });
    case undefined:
      return array.sort();
    default:
      return "There is an error";
  }
}
