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

<script src="./calculator.js"/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./calculator.css" scoped />
