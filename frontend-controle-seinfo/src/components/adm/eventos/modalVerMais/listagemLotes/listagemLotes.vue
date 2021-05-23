<template>
    <div>
        <div id="list" class="row">
            <table class="table table-striped"
                    cellspacing="0"
                    cellpadding="0"
                    style="text-align: center"
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th style="text-align: left">Evento</th>
                        <th style="text-align: left">Valor</th>
                        <th style="text-align: left">Data de Abertura</th>
                        <th style="text-align: left">Data de Fechamento</th>
                    </tr>
                </thead>
                <tbody v-for="lotes in dataLotes" :key="lotes.idLote">
                    <tr>
                        <td>{{lotes.idLote}}</td>
                        <td style="text-align: left">ID:{{lotes.idEvento}} | {{lotes.evento.nome}}</td>
                        <td style="text-align: left">R$ {{lotes.valor}}</td>
                        <td style="text-align: left">{{lotes.dataAbertura}}</td>
                        <td style="text-align: left">{{lotes.dataFechamento}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="./listagemLotes.js"/>