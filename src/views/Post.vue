<!-- Post.vue -->
<template>
    <div>
        <h2>Post Detail</h2>
        <div v-if="post">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            post: null,
        };
    },
    created() {
        const postId = this.$route.params.id;

        axios
            .get(`https://basic-blog.teamrabbil.com/api/post-details/${postId}`)
            .then((response) => {
                this.post = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>
  