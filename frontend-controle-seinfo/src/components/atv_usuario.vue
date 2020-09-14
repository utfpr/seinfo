<template>
  <div>
		<a-table :columns="columns" :data-source="res_atividades" :pagination="false" >
			<div slot="expandedRowRender" slot-scope="record" style="margin: 0" class="info">
				<tr>Valor:  R$ {{record.valor}}</tr>
				<tr>Vagas disponíveis: {{record.quantidadeVagas}}</tr>
				<tr>Horas de participação: {{record.horasParticipacao}}</tr>
				<tr>Categoria da atividade: {{record.categoriaAtv.nome}}</tr>
				<!-- <tr>Descrição: {{record.descricao}} </tr> -->
				<tr>Descrição: Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
					e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos
					e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, 
					como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. 
					Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
					e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
				</tr>
				<div class="botoes">
					<a-button type="button" class="ic" @click="redirectAtv(res.idEvento)" > INSCREVER </a-button>
          <!-- <a-button type="button" class="dl" @click="showDeleteConfirm(res.idEvento)"> CANCELAR INSCRIÇÃO </a-button> -->
				</div>
			</div>
    </a-table>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";
moment.locale("pt-br");

const columns = [{
  title: 'Atividades',
  dataIndex: 'titulo',
	width: 1200,
}];

export default {
	mounted() {
		this.pegar_tabela_atividades(this.$route.params.idEvento)
	},
	methods: {
	pegar_tabela_atividades(id) {
		axios
			.get(`http://localhost:3000/api/atividade/` + id)
			.then(response => {
				// console.log(this.$route.params.idEvento);
				console.log(response.data);
				this.res_atividades = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
		},
	},
	data () {
		return { 
			res_atividades: [],
			idEvento: "",
			columns,
		};
	},
	
};
</script>

<style scoped>
.info {
	font-size: 16px;
	text-align: left;
	font-weight: 600;
	letter-spacing: 0.2px;
	/* width: 80%; */
	/* border: 1px solid red; */
}
.info tr {
	/* border: 1px solid red; */
	height: 36px;
}
.botoes {
	border: 1px solid red;
	width: 112px;
	height: 34px;
	float: right;
}
.ic {
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(157, 211, 157, 0.5);
  border: 2px solid rgb(64, 212, 64);
  color: black;
  cursor: pointer;
	float: right;
	margin-left: -50px	;
	border: 1px solid red;

}
.ic:hover {
  color: white;
  background-color: rgb(64, 212, 64);
}
.dl {
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(236, 69, 69, 0.5);
  border: 2px solid rgb(236, 69, 69);
  color: black;
  cursor: pointer;
  padding-top: 1.3px;
}
.dl:hover {
  color: white;
  background-color: rgb(236, 69, 69);
}
</style>