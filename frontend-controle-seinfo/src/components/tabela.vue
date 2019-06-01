<template>
  <div>
    <a-select defaultValue="Selecione uma Opção" class="space">
        <a-select-option name="administradores"  value="administradores" v-on:click="pegar_tabela('administradores')">Administradores</a-select-option>
        <a-select-option name="alunos" value="alunos" v-on:click="pegar_tabela('alunos')">Alunos</a-select-option>
        <a-select-option name="convidados" value="convidados" v-on:click="pegar_tabela('convidados')">Convidados</a-select-option>
        <a-select-option name="eventos" value="eventos" v-on:click="pegar_tabela('eventos')">Eventos</a-select-option>
        <a-select-option name="palestrantes" value="palestrantes" v-on:click="pegar_tabela('palestrantes')">Palestrantes</a-select-option>
        <a-select-option name="ministrantes" value="ministrantes" v-on:click="pegar_tabela('ministrantes')">Ministrantes</a-select-option>
    </a-select>
    <div id="list" class="row">
              <div class="table-responsive col-md-12">
                <table class="table table-striped" cellspacing="0" cellpadding="0" style="text-align: center;">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Status</th>
                      <th class="actions">Ações</th>
                    </tr>
                  </thead>
                  <tbody v-for="(res, i) in res_localizar" :key="res.idEvento">
                    <tr>
                      <td>{{i+1}}</td>
                      <td>{{res.nome}}</td>
                      <td>{{res.descricao}}</td>
                      <td>{{res.status}}</td>
                      <td class="actions">
                        <button type="button" style="width: 75px;" class="btn btn-success btn-sm" @click="openModal(res)">Ver Mais</button>
                        <button type="button" style="width: 75px;" class="btn btn-info btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-editar" @click="openModal(res)">Editar</button>
                        <button type="button" style="width: 75px;" class="btn btn-danger btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-excluir" @click="openModal(res)">Excluir</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </div><!-- /#list -->

    <a-modal title="Title" :visible="visible" @ok="handleOk" @cancel="handleCancel" >
      <div class="title">
        <h5 style="text-align:center">Cadastro de Aluno</h5>
        <div class="box">
          <label class="ant-form-item">Nome do Aluno:</label>
          <label class="ant-form-item">Senha do Aluno:</label>
          <label class="ant-form-item">RA do Aluno:</label>
          <label class="ant-form-item">Email do Aluno:</label>
          <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
        </div>
      </div>
    </a-modal>


  </div>
</template>


<script>
const axios = require('axios');
const columns = [{
  title: 'Nome do Evento',
  dataIndex: 'nome',
  width: 200,
}, {
  title: 'Data do Evento',
  dataIndex: 'data',
  width: 200,
}, {
  title: 'Status do Evento',
  dataIndex: 'status',
},{
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' },
  },
];

export default {
  methods: {
    showModal(e) {
      console.log(e)
      this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
    handleOk() {
      this.visible = false
    },
    pegar_tabela (name) {
      axios.get('http://localhost:3000/api/' + name)
      .then((response) => {
       console.log("Listou " + name);
       console.log(response.data);
       this.res_localizar = response.data
     })
     .catch(function (error) {
       console.log(error);
     })
    },
  },
  data() {
    return {
      res_localizar: [{"idEvento":1,"nome":"Extraction and agglomeration of peat","descricao":"VSIIGZRZJIDKZHHGFYXWIPJTZHXZQU","status":1}],
      columns,
      tabelas: [],
      visible: false
    
    }
  }
}
</script>

<style scoped>

.ic{
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
}

.eve{
  left: 85%;
  margin-top: 2%;
}

</style>
