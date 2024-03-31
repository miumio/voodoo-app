<script lang="ts">
import VoodooPostsList from './VoodooPostsList.vue'
import VoodooAppSearch from './VoodooAppSearch.vue'
import type { Post, User } from '../types/types'

const API_URL = 'https://jsonplaceholder.typicode.com/'
const POSTS_ENDPOINT = 'posts/'
const USERS_ENDPOINT = 'users/'

export default {
    components: {
        VoodooPostsList,
        VoodooAppSearch
    },

    data() {
        return {
            searchQuery: '',
            posts: [] as Post[],
            users: [] as User[]
        }
    },

    created() {
        this.fetchPosts()
        this.fetchUsers()
    },

    methods: {
        async fetchPosts() {
            try {
                const response = await fetch(API_URL + POSTS_ENDPOINT)
                this.posts = await response.json()
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        },

        async fetchUsers() {
            try {
                const response = await fetch(API_URL + USERS_ENDPOINT)
                this.users = await response.json()
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        },

        setSearchQuery(query: string) {
            this.searchQuery = query
        }
    },

    computed: {
        filteredPosts(): Post[] {
            const searchTerm = this.searchQuery.toLowerCase()
            return this.posts
                .map((post) => {
                    const matchingUser = this.users.find((user) => user.id === post.userId)
                    const userName = matchingUser ? matchingUser.name : ''
                    return { ...post, userName }
                })
                .filter((post) => post.userName.toLowerCase().includes(searchTerm))
        }
    }
}
</script>

<template>
    <section class="py-5 bg-light voodoo-app">
        <div class="container">
            <VoodooAppSearch :value="searchQuery" @input="setSearchQuery" />
            <VoodooPostsList :posts="filteredPosts" />
        </div>
    </section>
</template>

<style>
.voodoo-app {
    height: 100vh;
}
</style>
