//logic for user interface
//import { vowelCounter} from './wordcounter';
import { Entry } from './wordcounter';
import './styles.css';

$(document).ready(function() {
  $('#word-counter-form').submit(function(event){
    event.preventDefault();
    var words = new Entry($('#wordcount').val()).wordCounter();
    var vowels = new Entry($('#wordcount').val()).vowelCounter();
    var cons = new Entry($('#wordcount').val()).consCounter();

      $('#solution').append("<li>There are " + words + " and " + cons + " consonants and " + vowels + " vowels</li>");

  });
});
