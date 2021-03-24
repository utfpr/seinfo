<template>
    <div class="title">
        <a-button type="primary" class="teste" @click="toggle">Inserir Evento</a-button>
        <slide-up-down :active="active">
            <div>
                <cadastro @child_toggle="toggle"/>
            </div>
        </slide-up-down> 
    </div>
</template>

<script src="./eventos.js"></script>
<style scoped scr="./eventos.css"></style>