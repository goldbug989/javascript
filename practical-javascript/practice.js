function quiz(text){
  var newText = '';

  for(var i = 0; i < text.length; i++){
    if(text[i] === '-'){
      newText += '--';
    } else {
      newText += text[i];
    }
  }
  return ('--' + newText + '--').split('-');
}

console.log(quiz('careful-is-fast'));