//rest parameters
//oposite of spread operator
//uses ...
//to combine multiple params into orange

//es5
function isFullAge(){
  console.log(arguments);
//convert arguments into array.
//          arguments is an array like structure view in console
argsArr = Array.prototype.slice.call(arguments);
let now = new Date().getFullYear();
argsArr.forEach(function(cur){  //cur => console.log(now - cur)
  console.log(now - cur);
});
}

isFullAge(1990,1999,1965);

//ES6
//rest parameters ... converts args into array
function isFullAge6(...years){
  let now = new Date().getFullYear();
  console.log(years);
  years.forEach(cur => console.log(now-cur));

}

isFullAge6(1990,1980,1970);

//****************************************************
//spread operator used in function call
//****************************************************
//rest parameter used in function declaration
//****************************************************



//*******************************************************
//*******************************************************
//        add more arguments
//*******************************************************
//*******************************************************
function isFullAge2(limit){
  console.log(arguments);
//convert arguments into array.
//          arguments is an array like structure view in console
argsArr = Array.prototype.slice.call(arguments,1);
let now = new Date().getFullYear();
argsArr.forEach(function(cur){  //cur => console.log(now - cur)
  console.log((now - cur) >= limit);
});
}

//slice can make array from position 1 on see line above
isFullAge2(21,1990,1960,1950,2000);


//ES6
//rest parameters ... converts args into array
function isFullAge62(limit,...years){
  let now = new Date().getFullYear();
  console.log(years);
  years.forEach(cur => console.log((now-cur) >= limit));

}
isFullAge62(21,1990,1999,2000,2010,1954);






















//eof
