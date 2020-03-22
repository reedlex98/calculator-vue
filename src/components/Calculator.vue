<template>
  <div class="calculator">
    <div class="display">{{currentValue || '0'}}</div>
    <div v-on:click="clear" class="button">C</div>
    <div v-on:click="sign" class="button">+/-</div>
    <div v-on:click="percent" class="button">%</div>
    <div v-on:click="divide" class="button operators">÷</div>
    <div v-on:click="joinNumbers('7')" class="button">7</div>
    <div v-on:click="joinNumbers('8')" class="button">8</div>
    <div v-on:click="joinNumbers('9')" class="button">9</div>
    <div v-on:click="multply" class="button operators">x</div>
    <div v-on:click="joinNumbers('4')" class="button">4</div>
    <div v-on:click="joinNumbers('5')" class="button">5</div>
    <div v-on:click="joinNumbers('6')" class="button">6</div>
    <div v-on:click="subtract" class="button operators">-</div>
    <div v-on:click="joinNumbers('1')" class="button">1</div>
    <div v-on:click="joinNumbers('2')" class="button">2</div>
    <div v-on:click="joinNumbers('3')" class="button">3</div>
    <div v-on:click="sum" class="button operators">+</div>
    <div v-on:click="joinNumbers('0')" class="button zero">0</div>
    <div v-on:click="point" class="button">.</div>
    <div v-on:click="result" class="button operators">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: '123',
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: 0 auto;
  width: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 40px;
}
/* .calculator, .calculator div{
  border: 1px solid black;
} */
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.button {
  background-color: #f2f2f2;
  border: 1px solid #999;
}
.operators {
  background-color: orange;
  color: white;
}
</style>
