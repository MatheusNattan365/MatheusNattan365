<template>
  <v-layout>
    <v-dialog v-model="dialog" scrollable max-width="700px">
      <template v-slot:activator="{ on }">
        <v-btn  v-on="on" @click="obterPacientes" color="info">Obter Paciente</v-btn>
      </template>
      <v-card>
        <v-card-title>Obter Paciente</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 600px;">
          <Lista  :pacientesForms="pacientesForms"
                  :clienteForm="clienteForm"
                  :dialog="dialog" 
                  />                 
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import Lista from './ListaDePacientes.vue'
export default {
  components:{
    Lista,
  },

  props:[ 
    'clienteForm',
    ],

  data(){
    return{
      dialogm1: '',
      dialog: false,
      pacientesForms: [],
    }
  },
  methods:{
    obterPacientes() {
      this.$http.get("clientes.json").then(res => {
        this.pacientesForms = res.data;
        
        // this.$refs.modalPesquisaPaciente.show()
      });
    },
  }
};
</script>

<style>

</style>
