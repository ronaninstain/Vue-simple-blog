<!-- PostList.vue -->
<template>
    <div>
        <h2>Post List</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            posts: [],
        };
    },
    created() {
        axios
            .get("https://basic-blog.teamrabbil.com/api/post-list/2") // Replace with the correct API URL
            .then((response) => {
                this.posts = response.data;
            })
            .catch((error) => {
                console.error(error);
