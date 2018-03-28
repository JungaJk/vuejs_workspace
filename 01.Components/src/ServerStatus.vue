<template>
    <div>
        <p>{{status}}</p>
        <hr>
        <button @click="chnageStatus">Click</button>
    </div>
    
</template>

<script>
    export default {
        data: function(){
            return {
                status: 'critical'
            }
        },
        methods: {
            chnageStatus(){
                this.status = 'normal'
            }
        }
    }
</script>