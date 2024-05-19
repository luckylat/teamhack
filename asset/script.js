console.log("test");

console.log(window.ipc)

window.onload = () => {
  const form = document.querySelector("#status");
  const code = document.querySelector("#code");
  const texts = document.querySelector("#texts");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let block = document.createElement('div');
    block.innerHTML = '<p>' + code.value; + '</p>'
    texts.appendChild(block);
  })
};


//Array.prototype.indexOf = function(){
//  console.log("overwrite array prototype")
//  return 1337;
//}
//
//Function.prototype._call = Function.prototype.call;
//Function.prototype.call = function(...args) {
//  console.log("overwrite call prototype");
//  return this._call(...args);
//}
