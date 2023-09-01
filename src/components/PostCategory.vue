<!-- PostCategory.vue -->
<template>
    <div>
        <h2>Categories</h2>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <router-link :to="'/category/' + category.id">{{ category.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            categories: [],
        };
    },
    created() {
        axios
            .get("https://basic-blog.teamrabbil.com/api/post-categories") // Replace with the correct API URL
            .then((response) => {
                this.categories = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>
  