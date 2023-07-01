<template>
    <Header/>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        name: 'App',
        components: {
            Header
        },
        data(){
            return {
                name: 'TailwindCSS'
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        font-family: 'Inter', sans-serif;
    }
</style>