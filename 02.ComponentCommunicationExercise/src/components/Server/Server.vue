<template>
    <li class="list-group-item"  @click="serverSelected">
        Server #{{ id }}
    </li>
</template>

<script>
    export default{
       props:['id'],
        methods:{
            serverSelected(){
                console.log('sss')
            }
        }
    }
</script>

<style>

</style>
