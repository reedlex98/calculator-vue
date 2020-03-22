export default {
  name: 'Calculadora',
  data() {
    return {
      currentValue: '0',
      previousNumber: null,
      operator: null,
      clickedOperator: false,
    };
  },
  methods: {
    clear() {
      this.currentValue = '';
    },
    sign() {
      this.currentValue =
      this.currentValue.charAt(0) === '-'
        ? this.currentValue.slice(1)
        : `-${this.currentValue}`;
    },
    percent() {
      this.currentValue = `${parseFloat(this.currentValue) / 100}`;
    },
    joinNumbers(number) {
      if (this.clickedOperator) {
        this.currentValue = '';
        this.clickedOperator = false;
      }
      this.currentValue = `${this.currentValue}${number}`;
    },
    point() {
      if (this.currentValue.indexOf('.') === -1) {
        this.joinNumbers('.');
      }
    },
    setVal() {
      this.previousNumber = this.currentValue;
      this.clickedOperator = true;
    },
    result() {
      this.currentValue = `${this.operator(
        parseFloat(this.previousNumber),
        parseFloat(this.currentValue),
      )}`;
      this.previousNumber = null;
    },
    divide() {
      this.operator = (num1, num2) => num1 / num2;
      this.setVal();
    },
    sum() {
      this.operator = (num1, num2) => num1 + num2;
      this.setVal();
    },
    multply() {
      this.operator = (num1, num2) => num1 * num2;
      this.setVal();
    },
    subtract() {
      this.operator = (num1, num2) => num1 - num2;
      this.setVal();
    },
  },
};
