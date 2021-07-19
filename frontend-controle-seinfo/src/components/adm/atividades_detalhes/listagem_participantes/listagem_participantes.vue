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
                        <th style="text-align: center">Nome</th>
                        <th style="text-align: center">Email</th>
                        <th style="text-align: center">Data Inscrição</th>
                        <th style="text-align: center">Status</th>
                    </tr>
                </thead>
                <tbody v-for="listData in participantes" :key="listData.dataInscricao" >
                    <tr>
                        <td style="text-align: center">{{listData.eventoInsc.pessoaInsc.nome}}</td>
                        <td style="text-align: center">{{listData.eventoInsc.pessoaInsc.email}}</td>
                        <td style="text-align: center">{{listData.eventoInsc.dataInscricao}}</td>
                        <td style="text-align: center"><a-button type="primary" @click="confirmarPresenca(listData.eventoInsc.pessoaInsc.email)">Confirmar Presença</a-button></td>
                    </tr>
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