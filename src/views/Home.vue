<!-- Home.vue -->
<template>
    <div>
        <Category />
        <router-view />
    </div>
</template>
  
<script>
import Category from "@/components/Category.vue";

export default {
    components: {
        Category,
    },
};
</script>
  