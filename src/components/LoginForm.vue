<template>
  <div class="loginForm">
    <img class="formLogo" src="@/assets/logo.png" alt="Logo" />
    <form role="form" method="post" @submit.prevent="onSubmit()">
      <div class="username">
        <input type="text" placeholder="Логин" v-model="user.name" required />
      </div>
      <div class="password">
        <input type="password" placeholder="Пароль" v-model="user.password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.loggedIn;
    }
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.login(this.user);
    }
  }
};
</script>

<style scoped>
.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  margin: 0;
  border: 3px solid #d73854;
  border-radius: 20px;
}

.formLogo {
  width: 100px;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #d73854;
  border-radius: 10px;
  outline: none;
}
button {
  align-self: center;
  width: 100%;
  padding: 10px;
  background-color: #d73854;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  outline: none;
}
button:hover {
  background-color: #f34766;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
button:active {
  background-color: #f34766;
  box-shadow: none;
}
</style>
