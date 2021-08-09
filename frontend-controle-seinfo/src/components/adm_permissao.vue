<template>
  <div class="title">
    <h5 style="text-align:center">
      Perfil
    </h5>
    <div class="box">
      <form method="post">
        <a-form-item>
          <label class="ant-form-item-required">CPF:</label>
          <the-mask
            autofocus
            @blur.native="handleBlur"
            v-model="obj.CPF"
            placeholder="000.000.000-00"
            class="ant-input"
            :mask="['###.###.###-##']"
          />
        </a-form-item>
        <a-form-item>
          <label class="ant-form-item-required">Nivel:</label>
          <a-select v-model="obj.nivel" name="select_nivel" default-value="0">
            <a-select-option value="0">
              Usuario comum
            </a-select-option>
            <a-select-option value="1">
              Supervisor
            </a-select-option>
          </a-select>
        </a-form-item>
        <div class="StyleButton">
          <a-form-item>
            <a-button
              type="submit"
              @click="alterarPerfil()"
              :disabled="isActive"
            >
              Alterar Permissões
            </a-button>
          </a-form-item>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { TheMask } from "vue-the-mask";

import axios from "../config/axiosConfig";

export default {
  components: {
    TheMask,
  },
  data() {
    return {
      isActive: true,
      obj: {
        CPF: "",
        nivel: "",
      },
    };
  },
  mounted() {},
  methods: {
    handleBlur() {
      if (!this.obj.CPF) {
        this.isActive = true;
        alert("CPF é um campo obrigatório");
      }
      axios.get(`/api/pessoa/${this.obj.CPF}`).then((response) => {
        if (!response.data.idPessoa) {
          this.isActive = true;
          alert("CPF não cadastrado no sistema");
        } else {
          if (response.data.nivel === 2) {
            this.isActive = true;
            alert("Você não tem permissão para alterar os dados deste usuário");
          } else {
            this.isActive = false;
          }
        }
      });
    },
    alterarPerfil() {
      if (this.obj.nivel === "") {
        alert("Nivel é um campo obrigatório");
      } else {
        axios
          .patch(`/api/pessoa/${this.obj.CPF}`, {
            nivel: this.obj.nivel,
          })
          .then((response) => {
            console.log(response.data);
            alert(response.data);
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
  },
};
</script>
<style scoped>
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-top: 10px;
  margin-right: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.title {
  margin-top: 30px;
}

.StyleButton {
  margin-top: 30px;
  text-align: center;
}

.space {
  padding: 2px;
  width: 221px;
}

label {
  margin-bottom: 0;
}

.ant-form-item {
  margin-bottom: 0;
}

.space_2 {
  padding: 2px;
  width: 444px;
}
</style>
