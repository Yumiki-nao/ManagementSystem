<template>
    <div>
        home
    </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user';
import { onMounted } from "vue";

let userStore = useUserStore();
onMounted(()=>{
    console.log(userStore.token);
    
})

</script>

<style lang="scss" scoped>

</style>