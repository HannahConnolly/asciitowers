class TurnStack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(state) {
    return this.stack.push(state);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

export default TurnStack;
