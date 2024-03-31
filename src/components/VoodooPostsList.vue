<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Post } from '../types/types'
import VoodooPostCard from './VoodooPostCard.vue'

export default defineComponent({
    components: {
        VoodooPostCard
    },
    props: {
        posts: Array as PropType<Post[]>
    }
})
</script>

<template>
    <ul class="voodoo-posts-list">
        <li v-for="post in posts" :key="post.id" class="mb-2 voodoo-posts-list__item">
            <VoodooPostCard :post="post" />
        </li>
    </ul>
</template>

<style lang="scss">
.voodoo-posts-list {
    columns: 3;
    list-style: none;
    padding: 0;
    max-height: 80vh;
    overflow: scroll;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        columns: none;
        max-height: 90vh;
    }
}

.voodoo-posts-list__item {
    break-inside: avoid-column;
}
</style>
