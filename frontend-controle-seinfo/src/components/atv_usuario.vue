<template>
  <div>

	
  <ul class="check-card" style="float:left;margin-left: 30px;">
	<li v-for="item in items" :key="item.title" class="check-card-item">
		<input type="checkbox" id="check01" name="check" value="1">
		<label for="check01" class="radio"></label>
		<div class="check-card-bg"></div>
		<div class="check-card-body">
			<div class="check-card-toggle">
				<span></span>
				<span></span>
			</div>
			<div class="check-card-body-in">
				<h3 class="check-card-title">{{item.titulo}}</h3>
				<p class="check-card-description">
					{{item.descricao}}
				</p>
			</div>
			<div class="check-card-cancel">CANCELAR</div>
		</div>
	</li>
</ul>
 
  </div>
</template>


<script>
import axios from 'axios';
import moment from "moment";
moment.locale("pt-br");


export default {
	mounted(){ // V
    	this.pegar_tabela ()
	},
	//teste 2
  	data () {
        return { 
			items: []
        };
    },
    methods: {
		pegar_tabela() { // v
			axios
			.get(`http://localhost:3000/api/atividades`)
			.then(response => {
				console.log(response.data);
				this.items = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
    	},
    },
};
</script>

<style scoped>
* {
	padding: 0;
}
*, *:before, *:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
}
body {
	font-family: 'Josefin Sans', sans-serif;
	background: #ddd;
}
.check-card {
	list-style: none;
  width: 320px;
}
.check-card .check-card-item {
	position: relative;
	width: 100%;
	margin: 0 1% 15px;
	font-size: 16px;
	background: #2bbe44;
	overflow: hidden;
}
.check-card li label {
	display: block;
	position: absolute;
	height: 300px;
	width: 100%;
	z-index: 100;
	cursor: pointer;
}
.check-card .check-card-body {
	height: 300px;
	color: #fff;
	z-index: 2;
	position: relative;
}
.check-card .check-card-body-in {
	padding: 40px 20px 20px;

}
.check-card .check-card-title {
	font-family: 'Oswald', sans-serif;
	font-size: 32px;
	margin-bottom: 5px;
}
.check-card .check-card-bg,
.check-card .check-card-toggle {
	position: relative;
	background: #2e2d37;
	width: 36px;
	height: 36px;
	top: 10px;
	left: 10px;
	-webkit-border-radius: 50%;
	border-radius: 50%;
}
.check-card .check-card-bg {
	position: absolute;
	background: #2e2d37;
	-webkit-transition: all .3s ease-out;
	transition: all .3s ease-out;
	-webkit-transform:scale(1);
	transform:scale(1);
	z-index: 0;
}
.check-card .check-card-toggle span {
	position: absolute;
	display: block;
	width: 20px;
	margin-left: -10px;
	height: 1px;
	top: 50%;
	left: 50%;
	background: #fff;
	-webkit-transition: all .4s ease-out;
	transition: all .4s ease-out;

	-webkit-transform: rotate(-270deg);
	transform: rotate(-270deg);
}
.check-card .check-card-toggle span:first-child {
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
}
.check-card .check-card-cancel {
	font-size: 18px;
	border-top: solid 1px #fff;
	border-bottom: solid 1px #fff;
	padding: 10px 0 7px;
	text-align: center;
	position: absolute;
	bottom: -50px;
	margin: 0 7%;
	width: 86%;
	-webkit-transition: all .3s cubic-bezier(0.5, -0.8, 0.5, 1.8);
	transition: all .3s cubic-bezier(0.5, -0.8, 0.5, 1.8);
}
.check-card input[type=checkbox] {
	display: none;
}
.check-card input[type=checkbox]:checked ~ .check-card-body .check-card-toggle span {
	-webkit-transform: rotate(0deg);
	transform: rotate(0deg);
}
.check-card input[type=checkbox]:checked ~ .check-card-body .check-card-toggle span:first-child {
	-webkit-transform: rotate(0deg);
	transform: rotate(0deg);
}
.check-card input[type=checkbox]:checked ~ .check-card-bg {
	-webkit-transform:scale(25);
	transform:scale(25);
}
.check-card input[type=checkbox]:checked ~ .check-card-body .check-card-cancel {
	bottom: 30px;
}
</style>