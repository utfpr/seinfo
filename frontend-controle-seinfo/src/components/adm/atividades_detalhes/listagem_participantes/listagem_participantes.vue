<template>
    <div class="row">
        <div class="table-responsive">
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
                <tbody v-for="resp in participantes" :key="resp.dataInscricao" >
                    <td style="text-align: left">
                        {{resp.eventoInsc.pessoaInsc.nome}}
                    </td>
                    <td style="text-align: left">
                        {{resp.eventoInsc.pessoaInsc.email}}
                    </td>
                    <td style="text-align: left">
                        {{resp.eventoInsc.dataInscricao}}
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="./listagem_participantes.js" />
<style src="./listagem_participantes.css" />