<template>
    <div>
        <div class="Participantes">
            Participantes inscritos:
        </div>
        <div class="row table-responsive" v-if="participantes.length !== 0">
            <table
                class="table table-striped"
                cellspacing="0"
                cellpadding="0"
                style="text-align: center"
            >
                <thead>
                    <tr>
                        <th style="text-align: left">Nome</th>
                        <th style="text-align: left">Email</th>
                        <th style="text-align: left">Data da inscrição</th>
                    </tr>
                </thead>
                <tbody v-for="listData in participantes" :key="listData.dataInscricao" >
                    <td style="text-align: left">
                        {{listData.eventoInsc.pessoaInsc.nome}}
                    </td>
                    <td style="text-align: left">
                        {{listData.eventoInsc.pessoaInsc.email}}
                    </td>
                    <td style="text-align: left">
                        {{listData.eventoInsc.dataInscricao}}
                    </td>
                </tbody>
            </table>
        </div>
        <div v-if="participantes.length == 0">
            <div class="notfound">
                Não tem participantes inscritos nessa atividade.
            </div>
        </div>
    </div>
</template>

<script src="./listagem_participantes.js" />
<style src="./listagem_participantes.css" />