<template>
    <div style="text-align: center">
        <br />
        SubAtividades:
        <div>
            <slide-up-down :active="remove">
                <div class="alert alert-danger" role="alert">
                    <h5>Deseja realmente Excluir essa subatividade?</h5>
                    <div class="row justify-content-center">
                        <button type="edit" class="btn btn-outline-primary mr-5"
                        v-on:click="excluir"
                        >
                        Excluir
                        </button>
                        <button type="reset" class="btn btn-outline-danger btn-sm-2 reset"
                        v-on:click="toggleExcluir"
                        >
                        Cancelar
                        </button>
                    </div>
                </div>
            </slide-up-down>
        </div>
        <div id="list" class="row">
            <table class="table table-striped"
                    cellspacing="0"
                    cellpadding="0"
                    style="text-align: center"
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th style="text-align: left">Data Inicio</th>
                        <th style="text-align: left">Hora Inicio</th>
                        <th style="text-align: left">Data Fim</th>
                        <th style="text-align: left">Hora Fim</th>
                        <th style="text-align: left">Local</th>
                    </tr>
                </thead>
                <tbody v-for="subatividades in modalData.atvAgenda" :key="subatividades.idAgenda">
                    <tr>
                        <td>{{subatividades.idAgenda}}</td>
                        <td style="text-align: left">{{moment(subatividades.dataHoraInicio).format("DD/MM/YYYY")}}</td>
                        <td style="text-align: left">{{moment(subatividades.dataHoraInicio).format("HH:mm")}}</td>
                        <td style="text-align: left">{{moment(subatividades.dataHoraFim).format("DD/MM/YYYY")}}</td>
                        <td style="text-align: left">{{moment(subatividades.dataHoraFim).format("HH:mm")}}</td>
                        <td style="text-align: left">{{subatividades.local}}</td>
                        <td>
                            <a-tooltip placement="top">
                                <template slot="title">Excluir</template>
                                <a-button
                                style="background: transparent; border: none; cursor: pointer; color: black;"
                                @click="toggleExcluir(subatividades)"
                                >
                                <a-icon type="delete" />
                                </a-button>
                            </a-tooltip>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="./listagemSubAtividades.js"/>
<style scoped src="./listagemSubAtividades.css"></style>