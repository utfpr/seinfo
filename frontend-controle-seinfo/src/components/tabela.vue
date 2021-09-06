
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
                  <tbody v-for="(res) in res_localizar" :key="res.idEvento">
                    <tr>
                      <td>{{res.idEvento}}</td>
                      <td>{{res.nome}}</td>
                      <td>{{res.descricao}}</td>
                      <td>{{res.status}}</td>
                      <td class="actions">
                        <button type="button" class="ic" data-toggle="modal" data-target=".bd-example-modal-lg-editar" @click="openModal(res)"><a-icon type="edit" /></button>
                        <button type="button" class="ic" data-toggle="modal" data-target=".bd-example-modal-lg-ver-excluir" @click="openModal(res)"><a-icon type="delete" /></button>
                        <button type="button" class="ic" data-toggle="modal" data-target=".bd-example-modal-lg-ver-mais" @click="openModal(res)"><a-icon type="eye"/></button>
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

    <!-- MODAL VER MAIS (INICIO) -->
      <div class="modal fade bd-example-modal-lg-ver-mais" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <label>ID: {{modalData.idEvento}}</label>
                <br>
                <label>Nome: {{modalData.nome}}</label>
                <br>
                <label>Descição: {{modalData.descricao}}</label>
                <br>
                <label>Status: {{modalData.status}}</label>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL VER MAIS (FIM) -->

      <!-- MODAL VER EDITAR (INICIO) -->
      <div class="modal fade bd-example-modal-lg-editar" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <form class="form">
                  <div class="row justify-content-center">
                    <a-form-item class="space_2">
                      <label class="ant-form-item-required">Nome do Evento:</label>
                      <input type="text" v-model=modalData.nome class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </a-form-item>
                  </div>
                  <div class="row justify-content-center">
                    <a-form-item class="space">
                      <label class="ant-form-item-required">Data de Inicio do Evento:</label>
                      <a-input name="data_ini" type="date">
                        <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
                      </a-input>
                    </a-form-item>
                    <a-form-item class="space">
                      <label class="ant-form-item-required">Hora de Inicio do Evento:</label>
                      <a-input name="hora_ini" type="time">
                        <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
                      </a-input>
                    </a-form-item>
                  </div>
                  <div class="row justify-content-center">
                    <a-form-item class="space">
                      <label class="ant-form-item-required">Data de Fim do Evento:</label>
                      <a-input name="data_fim" type="date">
                        <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
                      </a-input>
                    </a-form-item>
                    <a-form-item class="space">
                      <label class="ant-form-item-required">Hora de Fim do Evento:</label>
                      <a-input name="hora_fim" type="time">
                        <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
                      </a-input>
                    </a-form-item>
                  </div>
                  <div class="row justify-content-center">
                    <a-form-item class="space">
                      <label class="ant-form-item-required">Local do evento:</label>
                      <a-input maxlength="255" name="local_eve" type="text" placeholder="Local">
                        <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
                      </a-input>
                    </a-form-item>
                    <a-form-item class="space">
                      <label class="ant-form-item-required">Status do evento:</label>
                      <a-select name="sta_evento" defaultValue="0">
                        <a-select-option value="1">Evento disponivel</a-select-option>
                        <a-select-option value="0">Evento indisponivel</a-select-option>
                      </a-select>
                    </a-form-item>
                  </div>
                    
                    <div class="row justify-content-center">
                      <a-form-item class="space_2">
                        <label class="ant-form-item-required">Descrição:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model=modalData.descricao></textarea>
                      </a-form-item>
                  </div>
                  <div class="row justify-content-center">
                    <a-form-item class="space_2">
                      <a-input name="hora_part" value="0" type="hidden"></a-input>
                    </a-form-item>
                  </div>
                  <div class="row justify-content-center">
                    <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL VER EDITAR (FIM) -->


      <!-- MODAL VER MAIS (EXCLUIR) -->
      <div class="modal fade bd-example-modal-lg-ver-excluir" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Excluir</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <h4>Voce realmente deseja excluir este item:</h4>
                <br>
                <label>ID: {{modalData.idEvento}}</label>
                <br>
                <label>Nome: {{modalData.nome}}</label>
                <br>
                <label>Descição: {{modalData.descricao}}</label>
                <br>
                <label>Status: {{modalData.status}}</label>,
                <br>
                <br>
                <a-button v-on:click="deletar_evento(modalData.idEvento)" type="danger" block>Eu desejo Excluir este item</a-button>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL VER MAIS (EXCLUIR) -->


  </div>
</template>


<script>
import axios from '../config/axiosConfig';

export default {
  methods: {
    openModal (data) {
      this.modalData = data
      this.modalVisible = true
    },
    deletar_evento(pos) {
      axios.delete('/api/evento/'+pos)
            .then(response => {
                console.log("Deletou!");
                console.log(response);
            });
            
            location.reload();
    },
  
    pegar_tabela (name) {
      axios.get('/api/' + name)
      .then((response) => {
       this.res_localizar = response.data
     })
     .catch(function (error) {
       console.log(error);
     })
    },
  },
  data() {
    return {
      res_localizar: [],
      columns: [],
      tabelas: [],
      modalVisible: false,
      modalData: ''
    
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

.ant-input {
  border-radius: 0;
}

.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 10px;
  padding: 20px;
}

label {
  margin-bottom: 0;
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

.ant-select-selection{
  border-radius: 0;
}

.space_3 {
  border-radius: 0;
  padding: 2px;
  width: 222px;
}
</style>
