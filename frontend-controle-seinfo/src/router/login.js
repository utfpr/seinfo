import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Registrar from "@/components/registrar";
import Cad_Pessoa from "@/components/cad_pessoa";
import Evento from "@/components/evento";
import not_found from "@/components/not_found";
import Cad_Aluno from "@/components/cad_aluno";
import Login from "@/components/Login"
import ConfirmaPresenca from "@/components/ConfirmaPresenca"

Vue.use(Router);

const login = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name:"Login",
    component: Login
  },
  {
    path: "/presenca/:idAgenda/:idEvento/:idAtividade",
    name: "PresencaEvento",
    component: ConfirmaPresenca
  },
  {
    path: "/registrar",
    name: "Registrar",
    component: Registrar,
  },
  {
    path: "/evento/:id",
    name: "Evento",
    component: Evento,
  },
  {
    path: "/cadastro",
    name: "Cad_Aluno",
    component: Cad_Aluno,
  },
  {
    path: "/cadPessoa",
    name: "Cad_Pessoa",
    component: Cad_Pessoa,
  },
  {
    path: "*",
    name: "e404",
    component: not_found,
  },
];

export default new Router({
  mode: "history",
  routes: login,
});