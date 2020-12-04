function func1(inputFunc,str){
  return inputFunc(str);
}

function func2(thing){
  return thing;
}

var ex = func1(func2,'yolo');
console.log(ex);