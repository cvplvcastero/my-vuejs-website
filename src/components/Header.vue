<template>
    <header class='select-none py-4 px-6 bg-indigo-700 dark:bg-indigo-900'>
        <div class='mx-auto max-w-5xl flex justify-between items-center'>
            <p class='font-medium text-gray-100 text-lg max-sm:text-base'>cyp.lucastero</p>
            <div class='flex'>
                <a href='https://github.com/daothanhminh/my-vuejs-website' class='rounded-full w-7 h-7 flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10 mr-1'>
                    <vue-feather type='github' class='text-gray-100 w-4 h-4'></vue-feather>
                </a>
                <div class='rounded-full w-7 h-7 flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10' @click='toggleDarkMode()'>
                    <vue-feather v-if='darkMode' type='sun' class='text-gray-100 w-4 h-4'></vue-feather>
                    <vue-feather v-else type='moon' class='text-gray-100 w-4 h-4'></vue-feather>
                </div>
            </div>
        </div>
        <div class='flex flex-col items-center text-center py-28 px-8'>
            <div class='mb-14'>
                <div class='text-7xl font-extrabold text-gray-100 tracking-tight max-sm:text-6xl'>
                    <span>Hello from </span>
                    <span v-if="name === 'Cyprus Lucastero'" @dblclick="name = '{{ name }}'">
                        {{ name }}
                    </span>
                    <span v-else class='px-1 rounded-md transition-all cursor-pointer hover:bg-white hover:bg-opacity-5 active:bg-opacity-10' @mouseover='tooltip = true' @mouseout='tooltip = false' @click="name = 'Cyprus Lucastero'">
                        {{ name }}
                    </span>
                    <span>!</span>
                </div>
            </div>
            <p class='text-gray-100 text-opacity-40 max-w-3xl font-light max-sm:text-sm'>This is my beautiful website using Vue.js and TailwindCSS! There's nothing interesting to see here, just some Vue.js features.</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                name: '{{ name }}',
                darkMode: false
            }
        },
        methods: {
            toggleDarkMode(){
                document.body.classList.toggle('dark');
                this.darkMode = !this.darkMode
            }
        }
    }
</script>