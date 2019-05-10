<template>
  <v-app>
    <NavBar />
    <v-content>
    <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components:{
    NavBar
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>
