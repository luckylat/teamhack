console.log("test");

Function.prototype._call = Function.prototype.call;
Function.prototype.call = function(...args) {
  console.log("overwrite prototype");
  return this._call(...args);
}
