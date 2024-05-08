console.log("test");

console.log(window.abc)

Array.prototype.indexOf = function(){
  return 1337;
}

//Function.prototype._call = Function.prototype.call;
//Function.prototype.call = 3;
//Function.prototype.call = function(...args) {
//  console.log("overwrite prototype");
//  return this._call(...args);
//}
