<template>
    <div class="title">
        <a-button type="primary" class="teste" @click="toggle">Inserir Atividade</a-button>
        <slide-up-down :active="active">
            <div>
                <cadastro @child_toggle="toggle"/>
            </div>
        </slide-up-down> 
        <listagem v-bind:listData="this.res"/>
    </div>
</template>

<script src="./atividades.js"/>
<style scoped src="./atividades.css"/>