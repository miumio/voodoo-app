<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Post } from '../types/types'

export default defineComponent({
    props: {
        post: {
            type: Object as PropType<Post>,
            required: true
        }
    }
})
</script>

<template>
    <article class="card box-shadow">
        <div class="card-body">
            <h2 class="card-title text-primary">{{ post.title }}</h2>
            <p class="card-text">
                {{ post.body }}
            </p>
            <p class="text-muted">{{ post.userName }}</p>
        </div>
    </article>
</template>

<style scoped>
h2 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 1.4rem;
}
</style>
