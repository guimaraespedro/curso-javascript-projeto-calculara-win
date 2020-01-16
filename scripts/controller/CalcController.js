class CalcControler {
  constructor() {
    this._operation = [];
    this._display = document.querySelector("#display");
    this.initiateButtonEvents();
    this.setLastNumberToDisplay();
  }

  initiateButtonEvents() {
    let buttons = document.querySelectorAll(".row>button");
    buttons.forEach(button => {
      button.addEventListener("click", event => {
        this.executeButton(button.innerHTML);
      });
    });
  }

  setLastNumberToDisplay() {
    if (this.getLastNumber() || this.getLastOperator()) {
      this.display =
        this.getLastNumber() == this._operation[this._operation.length - 1]
          ? this.getLastNumber()
          : this.getLastOperator();
    } else this.display = 0;
  }

  isOperator(value) {
    return ["+", "*", "/", "-", "%"].indexOf(value) > -1;
  }

  getLastOperator() {
    let lastOperator;
    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (this.isOperator(this._operation[i])) {
        lastOperator = this._operation[i];
        break;
      }
    }
    return lastOperator;
  }

  getLastNumber() {
    let lastNumber;
    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (!this.isOperator(this._operation[i])) {
        lastNumber = this._operation[i];
        break;
      }
    }
    return lastNumber;
  }

  getLastItem(isOperator = true) {
    let lastItem;
    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (this.isOperator(this._operation[i]) == isOperator) {
        lastItem = this._operation[i];
        break;
      } else if (!this.isOperator(this._operation[i]) !== isOperator) {
        lastItem = this._operation[i];
      }
    }
    return lastItem;
  }

  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }

  setLastOperation(value) {
    this._operation[this._operation.length - 1] = value;
  }

  addOperation(value) {
    if (isNaN(this.getLastOperation())) {
      if (this.isOperator(value)) {
        console.log("outra coisa");
        this._operation.push(value);
      } else {
        this._operation.push(value);
        this.setLastNumberToDisplay();
      }
    } else {
      if(this.isOperator(value)){
        this._operation.push(value);
        this.setLastNumberToDisplay();
      } else {
      let newValue = this.getLastOperation().toString() + value.toString();
      this.setLastOperation(parseFloat(newValue));
      this.setLastNumberToDisplay();}
    }
    console.log('array', this._operation);
  }

  clearAllEntries() {
    this._operation = [];
    this.setLastNumberToDisplay();
  }

  executeButton(value) {
    switch (value) {
      case "CE":
        this.clearAllEntries();
        break;
      case "C":
        break;
      case "←":
        break;
      case "+":
        this.addOperation("+");
        break;
      case "-":
        this.addOperation("-");
        break;
      case "÷":
        this.addOperation("/");
        break;
      case "X":
        this.addOperation("*");
        break;
      case "%":
        this.addOperation("%");
        break;
      case "=":
        this.calculate();
        break;
      case ",":
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(value);
        break;
      default:
        console.log("default");
        break;
    }
  }

  get display() {
    return this._display.innerHTML;
  }

  set display(value) {
    this._display.innerHTML = value;
  }
}
