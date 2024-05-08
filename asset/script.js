console.log("test");

console.log(window.abc)


Function.prototype._call = Function.prototype.call;
Function.prototype.call = function(...args) {
  console.log("overwrite prototype");
  return this._call(...args);
}
