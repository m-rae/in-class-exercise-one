<template>
  <div class="hello">
    <div class="input wrapper">
    <input v-bind:class="checklength" type="text" v-model="inputText">
      <div  v-if="inlineValidationClass">you exceeded 50 characters</div>
      </div>
    <div class="button-wrapper">
      <button v-bind:disabled="isButtonDisabled">Submit</button>
    </div>
  </div>
</template>


<script src="./HelloWorld.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./HelloWorld.css" scoped></style>