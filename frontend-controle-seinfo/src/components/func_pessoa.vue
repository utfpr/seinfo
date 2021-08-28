<template>
  <div class="title">
    <h5 style="text-align:center">
      Funcionalidade de Pessoa
    </h5>
    <div class="box">
      <form
        class="form"
        action="http://localhost:3000/api/pessoa"
        method="get"
      >
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Evento:</label>
            <a-select
              name="select_evento"
              default-value="0"
            >
              <a-select-option value="0">
                Evento 1
              </a-select-option>
              <a-select-option value="1">
                Evento 2
              </a-select-option>
              <a-select-option value="2">
                Evento 3
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Pessoa:</label>
            <div>
              <a-select
                name="select_pessoa"
                default-value="${0}"
              >
                <a-select-option
                  v-for="(res) in res"
                  :key="res.idPessoa"
                  :value="res.idPessoa"
                >
                  {{ res.nome }}
                </a-select-option>
              </a-select>
            </div>
          </a-form-item>
        </div>

        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <a-radio-group v-model="value">
              <a-radio
                :style="radioStyle"
                :value="1"
              >
                Organizador de Evento
              </a-radio>
              <a-radio
                :style="radioStyle"
                :value="2"
              >
                Protagonista de Atividade
              </a-radio>
            </a-radio-group>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label
              v-if="value === 2"
              class="ant-form-item-required"
            >Atividade:</label>
            <a-select
              v-if="value === 2"
              name="select_atv"
              default-value="0"
            >
              <a-select-option value="0">
                Atividade 1
              </a-select-option>
              <a-select-option value="1">
                Atividade 2
              </a-select-option>
              <a-select-option value="2">
                Atividade 3
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label
              v-if="value === 2"
              class="ant-form-item-required"
            >Função:</label>
            <a-select
              v-if="value === 2"
              name="select_atv"
              default-value="0"
            >
              <a-select-option value="0">
                Função 1
              </a-select-option>
              <a-select-option value="1">
                Função 2
              </a-select-option>
              <a-select-option value="2">
                Função 3
              </a-select-option>
            </a-select>
          </a-form-item>
          <br>
        </div>
        <div class="row justify-content-center">
          <button
            type="submit"
            class="btn btn-outline-primary btn-sm"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosConfig';

export default {
  data() {
    return {
      res: [],
      nome: '',
      descricao: '',
      value: 0,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  mounted() {
    this.pegar_tabela('pessoas');
  },
  methods: {
    pegar_tabela(name) {
      axios
        .get(`/api/${name}`)
        .then((response) => {
          this.res = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 10px;
  padding: 20px;
}

.title {
  margin-top: 30px;
}

.ant-form-item {
  margin-bottom: 0;
}

.space {
  border-radius: 0;
  padding: 2px;
  width: 221px;
}

.space_2 {
  padding: 2px;
  width: 444px;
}
</style>
