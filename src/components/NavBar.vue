<template>
        <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PREV</span>
        <span class="font-weight-light">LAB</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/login"
        v-if="!isLoggedIn"
      >
        <span class="mr-2"  >Login</span>
      </v-btn>
      <v-btn
        flat
        to="/cadPacientes"
        v-if="isLoggedIn"
      >
        <span class="mr-2" >Cad. de Pacientes</span>
      </v-btn>
      <v-btn
        flat
        to="/CadExames"
        v-if="isLoggedIn"
      >
        <span class="mr-2">Cad. de Exames</span>
      </v-btn>
      <v-btn
        flat
        to="/relatorios"
        v-if="isLoggedIn"
      >
        <span class="mr-2">Relatórios</span>
      </v-btn>
      <v-btn
        flat
        v-if="isLoggedIn"
      >
        <span class="mr-2" @click="logout">Logout</span>
      </v-btn>
    </v-toolbar>
</template>

<script>

import firebase from 'firebase'

export default {
    name: 'navbar',
  data () {
    return {
      isLoggedIn: false,
      currentUser: false,
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods:{
    logout(){
      firebase
        .auth()
        .signOut()
        .then( () => {
          this.$router.go({ path: this.$router.path });
      })
    }
  }
}
</script>

<style>

</style>
