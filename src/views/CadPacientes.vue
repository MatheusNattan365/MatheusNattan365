<template>
  <v-container >
    <v-layout column wrap>
      <v-flex xs8 offset-xs2>
        <v-form>
          <v-container>
            <h1>Cadastro de Pacientes</h1>
            <v-layout>
              <v-flex xs12 md6>
                <v-text-field
                  v-model="clienteForm.nome"
                  :rules="nameRules"
                  :counter="50"
                  label="Nome do paciente"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md2>
                <v-text-field v-model="clienteForm.idade" type="number" label="Idade"></v-text-field>
              </v-flex>

              <v-flex xs12 md2>
                <v-text-field
                  v-model="clienteForm.nascimento"
                  type="date"
                  label="Data de nascimento"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="clienteForm.solicitante"
                  :rules="nameRules"
                  :counter="35"
                  label="Solicitante"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md4>
                <v-text-field
                  v-model="clienteForm.convenio"
                  :rules="nameRules"
                  :counter="25"
                  label="Convênio"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout align-end justify-end fill-height>
              <v-btn type="submit" @click="salvar" color="primary">Salvar</v-btn>
              <v-btn resetar @click="resetar" color="error">Resetar</v-btn>
              <!-- Btn Dialog -->
              <BtnObterPacientes :clienteForm="clienteForm"/>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BtnObterPacientes from "../components/BtnObterPacientes.vue";

export default {
  name: 'cadPacientes',
  components: {
    BtnObterPacientes
  },
  data() {
    return {
      dialog: false,
      valid: false,
      clientesForms: [],
      clienteForm: {
        nome: "",
        idade: "",
        nascimento: "",
        solicitante: "",
        convenio: "",
        id: "",
        ada: "",
        cne: "",
        dd: "",
        ac: "",
        cm: "",
        ce: "",
        cem: "",
        fv: "",
        ae: "",
        conclusao: "",
        dataDaColeta: ""
      },
      nameRules: [v => !!v || "Field is required"]
    };
  },

  methods: {
    limparCampos() {
      this.clienteForm.id = "";
      this.clienteForm.nome = "";
      this.clienteForm.idade = "";
      this.clienteForm.nascimento = "";
      this.clienteForm.solicitante = "";
      this.clienteForm.convenio = "";
    },

    resetar() {
      let verificador = confirm("Tem certeza que deseja resetar?");
      if (verificador === true) {
        this.clienteForm.nome = "";
        this.clienteForm.idade = "";
        this.clienteForm.nascimento = "";
        this.clienteForm.solicitante = "";
        this.clienteForm.convenio = "";
      }
    },

    salvar() {
      if (
        this.clienteForm.nome &&
        this.clienteForm.convenio &&
        this.clienteForm.solicitante
      ) {
        let metodo = this.clienteForm.id ? "patch" : "post";
        let finalUrl = this.clienteForm.id
          ? `/clientes/${this.clienteForm.id}.json`
          : `clientes.json`;
        this.$http[metodo](finalUrl, this.clienteForm).then(res => {
          if (res.config.method === "post") {
            alert("Cliente cadastrado com sucesso!");
          } else {
            alert("Cliente atualizado com sucesso!");
          }
          this.limparCampos();
        });
      }
    }
  }
};
</script>

<style>
</style>
