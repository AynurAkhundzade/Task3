function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}
class Messages {
  constructor(name, text, time = gettime()) {
    this.name = name;
    this.time = time;
    this.text = text;
  }
  toString() {
    console.log(`${this.time} ${this.name}: ${this.text}`);
  }
  toHTML() {
    return `<p>${this.time}  ${this.name}:  ${this.text} </ p>`;
  }
}
class Messenger {
  constructor() {
    this.history = [];
  }
  send(name, text) {
    this.history.push(new Messages(name, text, gettime()));
  }
  show_history() {
    let h = document.querySelector(".his");
    this.history.forEach((el) => (h.innerHTML += el.toHTML()));
  }
}
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let author = document.querySelector(".author");
  let message = document.querySelector(".message");
  let T = new Messenger();
  T.send(author.value, message.value);
  console.log(T.history);
  let h = document.querySelector(".his");
  T.show_history();
  author.value = "";
  message.value = "";
});
