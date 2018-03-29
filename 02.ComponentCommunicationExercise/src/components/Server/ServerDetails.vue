<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">select</p>
        <p v-else>{{server.status}}</p>
    </div>

</template>

<script>
    import{EventBus} from '../../main';

    export default{
        data: function() {
            return {
                server: null
            }
        },
        created(){
            EventBus.$on('itemSelected', (server)=>{
                this.server = server;
            })
        }

    }
    
</script>

<style>

</style>