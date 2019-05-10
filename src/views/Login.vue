<template>
  <v-layout class="login-form">
    <v-flex xs12 sm4 offset-sm4>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">Login</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

          <div class="login-btns">
            <v-flex >
          <v-text-field
            label="Email"
            
            v-model="email"
          ></v-text-field>
        </v-flex>
            <v-flex >
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-flex>
          </div>
        
        <v-card-actions>
          <v-btn flat color="blue" @click="login">Login</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login(e) {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
               async user => {
                alert(`You are logged in as ${user.user.email}`);
                 await this.$router.go({ path: this.$router.path })
                
              },
              err => {
                alert(err.message);
              }
            );
          e.preventDefault();
        }
    }
}
</script>

<style>
.login-form{
    margin-top: 10%;
}
.login-btns{
    margin: 5% 10%;
}
</style>
