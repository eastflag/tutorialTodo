
function myFunc() {

  for(var i=0; i < 3; ++i) {
    return function() {
      console.log(i);
    }
  }
}


myFunc()();
