<script lang="ts">
export default {
    name: 'VoodooAppSearch',

    props: {
        value: String
    },

    methods: {
        onInput(event: Event) {
            this.$emit('input', (event.target as HTMLInputElement).value)
        },
        onChange(event: Event) {
            this.$emit('change', (event.target as HTMLInputElement).value)
        }
    },

    emits: ['input', 'change']
}
</script>

<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                    />
                </svg>
            </span>
        </div>
        <input
            type="text"
            class="form-control"
            placeholder="Filter by author..."
            aria-label="author"
            aria-describedby="basic-addon1"
            name="author"
            inputemode="search"
            :value="value"
            @input="onInput"
            @change="onChange"
        />
    </div>
</template>

<style scoped lang="scss">
.input-group {
    max-width: 32%;
    margin: auto;

    @media (max-width: 767px) {
        max-width: unset;
    }
}
</style>
