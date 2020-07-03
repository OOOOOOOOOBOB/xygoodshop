<template>
    <div class="headers">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>


</template>

<script>
    export default {
        name: "Headers"
    }
</script>

<style scoped lang="less">
    .headers{
        display: flex;
        .left{
            width: 15%;
            display: flex;
        }
        .center{
            flex: 1;
            display: flex;
        }
        .right{
            width: 15%;
            display: flex;
        }

    }

</style>