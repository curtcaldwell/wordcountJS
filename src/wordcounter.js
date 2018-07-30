export function Entry (wordcount) {
  this.wordcount = wordcount;
}

Entry.prototype.wordCounter = function() {
  return this.wordcount.split(" ").length;
};

Entry.prototype.vowelCounter = function() {
var answer = 0;
var vowel = this.wordcount.split("");
for (var i = 0; i < vowel.length; i++) {
if ((vowel[i] == "a") || (vowel[i] == "e") || (vowel[i] == "i") || (vowel[i] == "o") || (vowel[i] == "u")) {
  answer++;
}
}
return answer;
};

Entry.prototype.consCounter = function() {
var answer = 0;
var cons = this.wordcount.split("");
for (var i = 0; i < cons.length; i++) {
 if ((cons[i] !== "a") && (cons[i] !== "e") && (cons[i] !== "i") && (cons[i] !== "o") && (cons[i] !== "u"))  {
  answer++;
}
}
return answer;
};
