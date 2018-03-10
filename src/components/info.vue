<template>
  <div class="login">
{{msg}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "info",

     
  
    };
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login {
  margin: 10%;
  padding: 1.2rem;
  border: 1px solid #ecb45f;
  box-shadow: #ea991e 4px 3px;
}
.input_name,
.input_password {
  margin: 0.3rem;
}
</style>
