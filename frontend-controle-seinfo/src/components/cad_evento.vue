<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Evento</h5>
    <div class="box">
      <form class="form" action="http://localhost:3000/api/evento" method="post">
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Nome do Evento:</label>
            <a-input maxlength="255" placeholder="Nome" name="nome" type="text">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Valor por Lotes:</label>
            <a onclick="alert('Separe os valores dos lotes com vírgulas! \n Exemplo:  40, 45, 50, 55, 60')"><a-icon type="question-circle" style="margin-left:10px; color:red;"/></a>
            <a-input maxlength="255" placeholder="00,00,00" name="qtd_lote" type="text">
              <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Quantidade de Lotes:</label>
            <a-input placeholder="Lotes" name="valor_lote" type="number">
              <a-icon slot="prefix" type="calculator" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Data de inicio dos Lotes:</label>
            <a onclick="alert('Separe as datas dos lotes com vírgulas! \n Exemplo:  02/04/2019, 05/04/2019, 15/10/2019')"><a-icon type="question-circle" style="margin-left:10px; color:red;"/></a>
            <a-input maxlength="255" placeholder="00/00/0000,00/00/0000" name="qtd_lote" type="text">
              <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Data de fim dos Lotes:</label>
            <a onclick="alert('Separe as datas dos lotes com vírgulas! \n Exemplo:  02/04/2019, 05/04/2019, 15/10/2019')"><a-icon type="question-circle" style="margin-left:10px; color:red;"/></a>
            <a-input maxlength="255" placeholder="00/00/0000,00/00/0000" name="qtd_lote" type="text">
              <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
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
            <a-select name="status" defaultValue="0">
              <a-select-option value="1">Evento disponivel</a-select-option>
              <a-select-option value="0">Evento indisponivel</a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Imagem do Evento:</label>
            <a-input maxlength="255" name="img" type="text" placeholder="Imagem">
            <a-icon slot="prefix" type="picture" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Descrição:</label>
            <a-textarea
              maxlength="5000"
              type="text"
              name="descricao"
              placeholder="Descrição"
              :rows="4"
            />
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <a-input name="hora_part" value="0" type="hidden">
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
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
  padding: 2px;
  width: 221px;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

.space_3 {
  padding: 2px;
  width: 222px;
}

</style>
