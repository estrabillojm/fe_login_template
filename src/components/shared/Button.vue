<template>
  <button :class='cls'>{{ name }}</button>
</template>
<script>


export default ({
    props: {
        cls: {
            required:true,
            type: String
        },
        name: {
            required: true,
            type: String
        }
    },
    setup(){
        const hello = "hello"
        return { hello }
    },
})
</script>

<style scoped>
    .btn{
        @apply border border-gray-400 px-20 py-1 rounded-md;
        transition:all .3s ease;
    }

    .blue{
        @apply bg-blue-500 text-white;
    }


    .btn:hover{
        opacity:.8;
        @apply text-gray-300;
    }

</style>