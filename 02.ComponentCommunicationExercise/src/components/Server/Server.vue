<template>
    <li class="list-group-item" @click="itemSelected">
        Server #{{server.id }}
    </li>
</template>

<script>
    import{EventBus} from '../../main';
    export default {
        props: ['server'],
        methods:{
            itemSelected(){
                EventBus.$emit('itemSelected', this.server)
            }
        }
    }
</script>

<style>

</style>
