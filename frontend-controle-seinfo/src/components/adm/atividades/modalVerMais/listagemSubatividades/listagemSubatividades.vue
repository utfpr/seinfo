<template>
    <div>
        <br />
        SubAtividades:
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="./listagemSubatividades.js"/>