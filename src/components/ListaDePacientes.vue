<template>
  <v-layout row justify-center>
    <v-flex>
      <v-card>
        <v-list >
          <template v-for="(paciente, index) in pacientesForms" >
            <v-list-tile :key="index">
              <v-list-tile-content row>
                <v-list-tile-title v-html="paciente.nome"></v-list-tile-title>
                <v-list-tile-sub-title v-html="index"></v-list-tile-sub-title>
                
              </v-list-tile-content>
                <v-btn @click="selecionarPaciente(paciente, index)">Carregar Paciente</v-btn>
                <v-btn @click="excluirPaciente(index)">Excluir</v-btn>
            </v-list-tile>
            
            <v-divider ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
content_copy
Inbox


<script>
export default {
    props: [
        'pacientesForms',
        'clienteForm',
        
    ],
    data () {
      return {
        
      }
    },
    methods:{
        selecionarPaciente(paciente, index) {
            this.clienteForm.nome = paciente.nome
            this.clienteForm.id = index
            this.clienteForm.solicitante = paciente.solicitante
            this.clienteForm.convenio = paciente.convenio
            this.clienteForm.idade = paciente.idade
            this.clienteForm.nascimento = paciente.nascimento
            this.clienteForm.ada = paciente.ada
            this.clienteForm.cne = paciente.cne
            this.clienteForm.dd = paciente.dd
            this.clienteForm.ac = paciente.ac
            this.clienteForm.cm = paciente.cm
            this.clienteForm.ce = paciente.ce
            this.clienteForm.cem = paciente.cem
            this.clienteForm.fv = paciente.fv
            this.clienteForm.ae = paciente.ae
            this.clienteForm.conclusao = paciente.conclusao
            this.clienteForm.dataDaColeta = paciente.dataDaColeta
            

    },
        async excluirPaciente(index) {
          let verificador = confirm(`Tem certeza que desejas excluir?`);
              if (verificador === true) {
                await this.$http.delete(`/clientes/${index}.json`)
                window.location.reload()
              }

        },
    }
  }

</script>

<style>

</style>
