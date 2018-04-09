<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedButton='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedButton='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedButton='appRed'">Load Red Template</button>
                <hr> 
                <!-- <keep-alive>
                </keep-alive> -->
                <!-- <app-blue>
                        <h1 slot="blueTitle">{{ blueTitle }}</h1>
                        <p slot="content">{{ content }}</p>
                    </app-blue> -->
                <component :is="selectedButton">
                    <h1 slot="blueTitle">{{ blueTitle }}</h1>
                    <p slot="content">{{ content }}</p>
                    <!-- <app-blue>
                        <h1 slot="blueTitle">{{ blueTitle }}</h1>
                        <p slot="content">{{ content }}</p>
                    </app-blue>
                    <app-green>
                        <p slot="content">{{ content }}</p>
                    </app-green>
                    <app-red>
                        <p slot="content">{{ content }}</p>
                    </app-red> -->
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                selectedButton: 'appBlue',
                blueTitle: "Blue Color",
                content: "This is content"
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
