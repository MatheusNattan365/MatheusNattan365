<template>
  <v-container>
    <h1>Cadastro de Exames</h1>

    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card blgiform>
          <v-card-title primary-title>
            <v-flex>
              <h3 class="headline mb-0">Paciente: {{clienteForm.nome}}</h3>
              <p>Registro: {{clienteForm.id }}</p>
            </v-flex>
          </v-card-title>
          <v-container>
            <BtnObterPacientes :clienteForm="clienteForm"/>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <v-form>
      <v-text-field
        v-model="clienteForm.dataDaColeta"
        type="date"
        label="Nome do paciente"
        required
      ></v-text-field>

      <v-text-field
        v-model="clienteForm.ada"
        type="text"
        label="Avaliação da amostra..."
        required
        
        :counter="100"
        list="avaDaAmostra"
      ></v-text-field>
      <datalist id="avaDaAmostra">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.cne"
        type="text"
        label="Células não epiteliais..."
        required
        
        :counter="100"
        list="celNaoEpiteliais"
      ></v-text-field>
      <datalist id="avaDaAmostra">
        <option value="Poucos polimorfonucleares neutrófilos"></option>
        <option value="Poucos polimorfonucleares neutrófilos e histiócitos"></option>
        <option value="Moderados polimorfonucleares neutrófilos"></option>
        <option value="Moderados polimorfonucleares neutrófilos e histiócitos"></option>
        <option value="Muitos polimorfonucleares neutrófilos"></option>
        <option value="Muitos polimorfonucleares neutrófilos e histiócitos"></option>
        <option value="Frequente polimorfonucleares neutrófilos e histiócitos"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.dd"
        type="text"
        label="Descamação dominante..."
        required
        
        :counter="100"
        list="descDominante"
      ></v-text-field>
      <datalist id="descDominante">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.ac"
        type="text"
        label="Alterações Celulares..."
        required
        
        :counter="100"
        list="altCelulares"
      ></v-text-field>
      <datalist id="altCelulares">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.cm"
        type="text"
        label="Celulas metaplásicas..."
        required
        
        :counter="100"
        list="celMetaplasicas"
      ></v-text-field>
      <datalist id="celMetaplasicas">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.ce"
        type="text"
        label="Celulas Endocervicais..."
        required
        
        :counter="100"
        list="celEndocervicais"
      ></v-text-field>
      <datalist id="celEndocervicais">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.cem"
        type="text"
        label="Celulas Endometriais..."
        required
        
        :counter="100"
        list="celEndometriais"
      ></v-text-field>
      <datalist id="celEndometriais">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.fv"
        type="text"
        label="Flora Vaginal..."
        required
        
        :counter="100"
        list="floVaginal"
      ></v-text-field>
      <datalist id="floVaginal">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field
        v-model="clienteForm.ae"
        type="text"
        label="Agentes Específicos..."
        required
        
        :counter="100"
        list="agntEspecificos"
      ></v-text-field>
      <datalist id="agntEspecificos">
        <option value="Satisfatória"></option>
        <option value="Insatisfatória"></option>
        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação"></option>
      </datalist>

      <v-text-field v-model="clienteForm.conclusao" type="text" label="Conclusão..." required></v-text-field>

      <v-btn block @click="salvarExame" color="primary">Salvar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
function datas() {
  let arr = document.getElementById("dataDaColeta");
  arr.split("");
  arr.splice(2, 0, "/");
  arr.splice(5, 0, "/");
  return arr.join("");
}
import BtnObterPacientes from "../components/BtnObterPacientes.vue";

export default {
  name: 'cadExames',
  components: {
    BtnObterPacientes
  },
  data() {
    return {
      clientesForms: [],

      clienteForm: {
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
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ]
    };
  },
  methods: {
    nameRules(){},
    datas(value) {},
    setaCampos(cliente) {
      this.clienteForm.nome = cliente.nome;
      this.clienteForm.ada = cliente.ada;
      this.clienteForm.cne = cliente.cne;
      this.clienteForm.dd = cliente.dd;
      this.clienteForm.ac = cliente.ac;
      this.clienteForm.cm = cliente.cm;
      this.clienteForm.ce = cliente.ce;
      this.clienteForm.cem = cliente.cem;
      this.clienteForm.fv = cliente.fv;
      this.clienteForm.ae = cliente.ae;
      this.clienteForm.conclusao = cliente.conclusao;
      this.clienteForm.dataDaColeta = cliente.dataDaColeta;
    },

    camposObrigatorios() {
      if (
        this.clienteForm.ada &&
        this.clienteForm.cne &&
        this.clienteForm.dd &&
        this.clienteForm.ac &&
        this.clienteForm.cm &&
        this.clienteForm.ce &&
        this.clienteForm.cem &&
        this.clienteForm.fv &&
        this.clienteForm.ae &&
        this.clienteForm.conclusao &&
        this.clienteForm.dataDaColeta
      ) {
        return true;
      }
    },

    limparCampos() {
      this.clienteForm.id = "";
      this.clienteForm.nome = "";
      this.clienteForm.ada = "";
      this.clienteForm.cne = "";
      this.clienteForm.dd = "";
      this.clienteForm.ac = "";
      this.clienteForm.cm = "";
      this.clienteForm.ce = "";
      this.clienteForm.cem = "";
      this.clienteForm.fv = "";
      this.clienteForm.ae = "";
      this.clienteForm.conclusao = "";
      this.clienteForm.dataDaColeta = "";
    },

    obterPacientes() {
      this.$http.get("clientes.json").then(res => {
        this.clientesForms = res.data;
      });
    },

    selecionarPaciente(cliente, id) {
      this.clienteForm.id = id;
      this.setaCampos(cliente);
    },

    salvarExame() {
      if (this.clienteForm.id) {
        if (this.camposObrigatorios()) {
          this.$http
            .patch(`/clientes/${this.clienteForm.id}.json`, this.clienteForm)
            .then(res => {
              alert("Exame cadastrado com sucesso!");
              this.limparCampos();
            });
        }
      } else {
        alert("Paciente não selecionado!");
      }
    },

    excluirPaciente(id) {
      this.$http.delete(`/clientes/${id}.json`);
      this.$refs.modalPesquisaPaciente.hide();
    },

    format(value) {
      return value.toUpperCase();
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
