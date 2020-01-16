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

  setLastNumberToDisplay(){
      if(this._operation.length>0){
      this.display=this._operation[this._operation.length-1];
      }else this.display = 0;
  }

  addOperation(value){
        this._operation.push(value);
        console.log('array',this._operation);
        this.setLastNumberToDisplay();
  }

  clearAllEntries(){
      this._operation=[];
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
        break;
      case "-":
        break;
      case "÷":
        break;
      case "X":
        break;
      case "%":
        break;
      case "=":
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
