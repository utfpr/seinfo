<template>
	<AuthConsumer>
    <div slot-scope="{ getUser }">
			<a-table :columns="columns" :data-source="res_atividades" :pagination="false" >
				<div slot="expandedRowRender" slot-scope="record" style="margin: 0" class="info">
					<tr>Valor:  R$ {{record.valor}}</tr>
					<tr>Vagas disponíveis: {{record.quantidadeVagas}}</tr>
					<tr>Horas de participação: {{record.horasParticipacao}}</tr>
					<tr>Categoria : {{record.categoriaAtv.nome}}</tr> 
					<tr>Descrição: {{record.descricao}} </tr>
					<div class="botoes">
						<a-button type="button" class="ic" @click="inscricao(getUser.CPF, record)"> INSCREVER-SE </a-button>
				<!-- <a-button type="button" class="dl" @click="showDeleteConfirm(res.idEvento)"> CANCELAR INSCRIÇÃO </a-button> -->
					</div>
				</div>
			</a-table>
			<a-table :columns="columns2" :data-source="res_atividades2" :pagination="false" >
				<div slot="expandedRowRender" slot-scope="record" style="margin: 0" class="info">
					<tr>Valor:  R$ {{record.atividade.valor}}</tr>
					<tr>Vagas disponíveis: {{record.atividade.quantidadeVagas}}</tr>
					<tr>Horas de participação: {{record.atividade.horasParticipacao}}</tr>
					<tr>Descrição: {{record.atividade.descricao}} </tr>
					<tr>
						<a-button type="button" class="dl"  @click="exclusao(getUser.CPF, record)"> CANCELAR INSCRIÇÃO </a-button>
					</tr>
				</div>
			</a-table>
		</div>
	</AuthConsumer>
</template>

<script>
import AuthConsumer from '../contexts/authConsumer';
import axios from '../config/axiosConfig';
import moment from "moment";
moment.locale("pt-br");

const columns = [{
  title: 'Atividades',
  dataIndex: 'titulo',
	width: 1200,
}];
const columns2 = [{
  title: 'Minhas atividades',
  dataIndex: 'atividade.titulo',
	width: 1200,
}];

export default {
	data () {
		return { 
			res_atividades: [],
			res_atividades2: [],
			idEvento: "",
			idAgenda:"",
			columns,
			columns2,
			cpf:""
		};
	},
	mounted() {
		const {idEvento , CPF, idAgenda} = this.$route.params
		this.idAgenda = idAgenda 
		this.cpf = CPF
		this.pegar_tabela_atividades(idEvento, CPF)
		this.pegar_tabela_atividades2(idEvento, CPF)
	},
	components: {
    AuthConsumer,
	},
	methods: {
	pegar_tabela_atividades(idEvento, CPF) {
		
		axios
			.get(`/api/inscAtvEventAll/${btoa(CPF)}/${idEvento}`)
			.then(response => {
				this.res_atividades = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});

		},

	pegar_tabela_atividades2(idEvento, CPF) {
		axios
			.get(`/api/inscAtvEvent/${btoa(CPF)}/${idEvento}`)
			.then(response => {
				this.res_atividades2 = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
		},
	inscricao(CPF, record) {
      axios
        .post(`/api/inscAtv/${record.idEvento}/${btoa(CPF)}` , {
					idAtividade: record.idAtividade})
        .then(() => {
			document.location.reload(true);
		})
        .catch(function (error) {
          alert("Não foi possível realizar a inscrição!");
          console.log(error);
        });
	},
	exclusao(CPF, record) {
      axios
        .delete(`/api/inscAtv/${record.idEvento}/${record.idAtividade}/${btoa(CPF)}`)
        .then(() => {
			document.location.reload(true);
        })
        .catch(function (error) {
			console.log(error);
        });
    },
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
	float: right;
	margin-left: -50px	;
}
.dl:hover {
  color: white;
  background-color: rgb(236, 69, 69);
}
</style>