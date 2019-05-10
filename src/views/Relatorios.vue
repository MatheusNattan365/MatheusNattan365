<template>
  <v-container>
    <h1 >Relatórios</h1>
    <v-btn block color="primary" @click="obterClientes">Carregar Pacientes</v-btn>

    <br>

    <v-layout row justify-center >
      <v-flex>
        <v-card>
          <v-list>
            <template v-for="(paciente, index) in pacientesForm">
              <v-list-tile :key="index">
                <v-list-tile-content row>
                  <v-list-tile-title v-html="index + 1 + '  ' + '-' + '  ' + paciente.nome"></v-list-tile-title>
                  
                </v-list-tile-content>
                <v-btn @click="imprimir(paciente)">Imprimir</v-btn>
                
              </v-list-tile>

              <v-divider></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

    
  </v-container>
</template>

<script>
import jsPDF from "../plugins/jspdf";

export default {
  name: 'relatorios',
  data() {
    return {
      clientesForms: [],
      pacientesForm: []
    };
  },

  methods: {
    imprimir(obj) {
      jsPDF.gerarDoc(obj);
    },

    obterClientes() {
      this.$http.get("clientes.json").then(res => {
        this.clientesForms = res.data;
        if (this.pacientesForm == 0) {
          for (let key in res.data) {
            this.pacientesForm.push(res.data[key]);
          }
        } else {
          this.pacientesForm = this.pacientesForm;
        }

        this.pacientesForm.reverse();
      });
    }
  }
};
</script>

<style>
.layout {
  color: rgb(87, 166, 149);
  font-family: "Montserrat Alternates", sans-serif;
}
</style>
